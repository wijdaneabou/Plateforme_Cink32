
const Event = require('../models/Events');
const Participant = require('../models/EventParticipant');


const getEvents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  try {
    const events = await Event.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const totalEvents = await Event.countDocuments().exec();
    const totalPages = Math.ceil(totalEvents / limit);

    console.log(`Fetching page ${page} with limit ${limit}`);
    console.log('Events fetched from database:', events); // Log fetched events
    console.log('Total events:', totalEvents); // Log total number of events
    console.log('Total pages:', totalPages); // Log total number of pages

    // Convertir les données binaires des images en base64
    const eventsWithBase64Images = events.map(event => {
      console.log(`Processing event: ${event.name}`);
      return {
        ...event.toObject(),
        photos: event.photos.map(photo => {
          console.log(`Processing photo for event ${event.name}`);
          return {
            ...photo,
            data: `data:${photo.contentType};base64,${photo.data.toString('base64')}`
          };
        })
      };
    });

    console.log('Events with base64 images:', eventsWithBase64Images); // Log processed events

    res.json({
      events: eventsWithBase64Images,
      totalCount: totalEvents,
      totalPages: totalPages // Notez l'ajout de la clé totalPages
    });
  } catch (err) {
    console.error('Error in getEvents:', err);
    res.status(500).json({ message: err.message });
  }
};



const getEventById = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    console.error('Error in getEventById:', err);
    res.status(500).json({ message: err.message });
  }
};
const getEventImage = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const photo = event.photos[0]; // Suppose que seule la première photo est utilisée
    if (!photo) {
      return res.status(404).json({ message: 'Event photo not found' });
    }

    res.set('Content-Type', photo.contentType);
    res.send(photo.data);
  } catch (err) {
    console.error('Error in getEventImage:', err);
    res.status(500).json({ message: err.message });
  }
};

// eventPageControllers.js



// Contrôleur pour gérer la participation à un événement
const participateEvent = async (req, res) => {
  const { eventId, userId } = req.params;

  try {
    // Vérifier si l'utilisateur est déjà inscrit à l'événement
    const existingParticipant = await Participant.findOne({ eventId, userId });
    if (existingParticipant) {
      return res.status(400).json({ message: 'User already participated in this event' });
    }

    // Créer un nouveau participant
    const newParticipant = new Participant({
      eventId,
      userId,
      event: req.body.event,
      eventLocation: req.body.eventLocation,
      eventStartDate: req.body.eventStartDate,
      eventEndDate: req.body.eventEndDate,
    });

    // Sauvegarder le participant dans la base de données
    await newParticipant.save();

    res.status(201).json({ message: 'Participation recorded successfully', participant: newParticipant });
  } catch (error) {
    console.error('Error participating in event:', error);
    res.status(500).json({ message: 'Failed to participate in event', error: error.message });
  }
};





module.exports = { getEvents, getEventById,getEventImage, participateEvent };

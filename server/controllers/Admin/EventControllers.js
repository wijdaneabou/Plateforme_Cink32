const Event = require('../../models/Events');
// Créer un nouvel événement


exports.createEvent = async (req, res) => {
  try {
    const { name, location, startDate, endDate, description, participantNumber, organizerName } = req.body;

    const photos = req.files.map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
      originalName: file.originalname
    }));

    const newEvent = new Event({
      name,
      location,
      startDate,
      endDate,
      description,
      participantNumber,
      organizerName,
      photos
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Obtenir tous les événements
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Obtenir un événement par ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error getting event:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
exports.updateEvent = async (req, res) => {
  try {
    const { name, location, startDate, endDate, description, participantNumber, organizerName } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    event.name = name;
    event.location = location;
    event.startDate = startDate;
    event.endDate = endDate;
    event.description = description;
    event.participantNumber = participantNumber;
    event.organizerName = organizerName;
    
    // Gérer les images
    if (req.files.length > 0) {
      const photos = req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname
      }));
      event.photos = photos;
    }
    await event.save();
    res.status(200).json({ message: 'Event updated successfully', event });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Supprimer un événement
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

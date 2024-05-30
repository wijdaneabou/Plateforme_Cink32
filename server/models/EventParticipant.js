const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', 
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', 
    required:false
  },
  participantName: {
    type: String,
    required: false
  },
  event: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  eventStartDate: {
    type: Date,
    required: true
  },
  eventEndDate: {
    type: Date,
    required: true
  },
});

// Avant de sauvegarder un participant, construire le nom complet du participant en utilisant le schéma d'utilisateur
participantSchema.pre('save', async function(next) {
  try {
    const user = await mongoose.model('Utilisateur').findById(this.userId);
    if (user) {
      this.participantName = `${user.nom} ${user.prenom}`;
    } else {
      throw new Error('User not found');
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;

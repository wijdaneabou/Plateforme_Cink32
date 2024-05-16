const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    startDate:{ 
        type: Date,
        required: true
    },
    endDate:{ 
        type: Date, 
        required: true 
    },
    description:{ 
        type: String, 
        required: true
    },
    photos: { 
        type: [String],
        required: true  
    },
    participantNumber:{ 
        type: Number, 
        required: true 
    },
    organizerName:{ 
        type: String,
        required: true 
    },
    status:{
        type: String,
        default:'pending'
    }
  });

module.exports = mongoose.model('Event', eventSchema);

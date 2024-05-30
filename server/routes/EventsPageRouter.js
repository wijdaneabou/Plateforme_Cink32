const express = require('express');
const { getEvents, getEventById,getEventImage, participateEvent } = require('../Controllers/EventsPageControllers');

const router = express.Router();

// Route pour récupérer les événements
router.get('/', getEvents);

// Route pour récupérer l'image d'un événement par son ID
router.get('/images/:id', getEventImage);

// Route pour obtenir un événement par ID
router.get('/:id', getEventById);

// Route pour participer à un événement
router.post('/:eventId/participate', participateEvent);

module.exports = router;

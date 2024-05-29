const express = require('express');
const multer = require('multer');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../../Controllers/Admin/EventControllers'); 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route pour créer un nouvel événement
router.post('/', upload.array('photos'), createEvent);

// Route pour obtenir tous les événements
router.get('/', getEvents);

// Route pour obtenir un événement par ID
router.get('/:id', getEventById);

// Route pour mettre à jour un événement
router.put('/:id', upload.array('photos'), updateEvent);

// Route pour supprimer un événement
router.delete('/:id', deleteEvent);

module.exports = router;

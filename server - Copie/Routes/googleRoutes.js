// GoogleauthRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/GoogleControllers');
router.get('/google/callback', authController.googleCallback);
router.get('/google', authController.googleAuth);

// More auth-related routes can be added here

module.exports = router;

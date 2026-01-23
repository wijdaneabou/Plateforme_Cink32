// routes/dashRouter.js
const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../../Controllers/Admin/DashboardControllers');

// Route pour obtenir les données du dashboard
router.get('/dash', getDashboardData);

module.exports = router;

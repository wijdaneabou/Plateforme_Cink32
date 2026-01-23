const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // Définissez la structure de votre schéma ici
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
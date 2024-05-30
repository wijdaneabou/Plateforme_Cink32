// models/CourseEnrollment.js
const mongoose = require('mongoose');

const CourseEnrollmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    enrollmentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CourseEnrollment', CourseEnrollmentSchema);

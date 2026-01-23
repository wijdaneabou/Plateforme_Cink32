// models/Report.js
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reportedMessage: { type: String, required: true },
  reportedUserID: { type: String, required: true },
  reportedUsername: { type: String, required: true },
  flaggingUserID: { type: String, required: true },
  flaggingUsername: { type: String, required: true },
  reason: { type: String, required: true },
  additionalComments: { type: String },
  stat: {type: String, required: false, default: "pending"},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema);
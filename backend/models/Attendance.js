const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  direction: {
    type: String,
    enum: ['in', 'out'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);

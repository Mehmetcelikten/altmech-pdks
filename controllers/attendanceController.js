const Attendance = require('../models/Attendance');

const checkIn = async (req, res) => {
  try {
    const attendance = new Attendance({
      userId: req.user.id,
      direction: 'in'
    });
    await attendance.save();

    res.status(201).json({ message: 'Check-in recorded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const checkOut = async (req, res) => {
  try {
    const attendance = new Attendance({
      userId: req.user.id,
      direction: 'out'
    });
    await attendance.save();

    res.status(201).json({ message: 'Check-out recorded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  checkIn,
  checkOut,
  getUserAttendance
};

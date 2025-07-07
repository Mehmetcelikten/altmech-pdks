const Shift = require('../models/Shift');

// Yönetici mesai ataması yapar
const assignShift = async (req, res) => {
  const { userId, date, startTime, endTime } = req.body;

  try {
    const shift = new Shift({
      userId,
      date,
      startTime,
      endTime,
      assignedBy: req.user.id
    });
    await shift.save();

    res.status(201).json({ message: 'Shift assigned successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Kullanıcı kendi mesai planını görür
const getUserShifts = async (req, res) => {
  try {
    const shifts = await Shift.find({ userId: req.user.id }).sort({ date: 1 });
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Yöneticinin tüm atamaları görmesi
const getAllShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().populate('userId', 'email role').sort({ date: 1 });
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  assignShift,
  getUserShifts,
  getAllShifts
};

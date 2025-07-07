const Permission = require('../models/Permission');

// Personelin izin talebi oluşturması
const requestPermission = async (req, res) => {
  const { startDate, endDate, reason } = req.body;
  try {
    const permission = new Permission({
      userId: req.user.id,
      startDate,
      endDate,
      reason
    });
    await permission.save();

    res.status(201).json({ message: 'Permission request submitted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İK'nın izin taleplerini listelemesi
const getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find().populate('userId', 'email role');
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İK'nın izin onayı veya reddi
const updatePermissionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const permission = await Permission.findById(id);
    if (!permission) {
      return res.status(404).json({ error: 'Permission request not found' });
    }

    permission.status = status;
    await permission.save();

    res.json({ message: `Permission request ${status}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  requestPermission,
  getAllPermissions,
  updatePermissionStatus
};

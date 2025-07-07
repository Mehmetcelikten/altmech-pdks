const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const {
  checkIn,
  checkOut,
  getUserAttendance
} = require('../controllers/attendanceController');

router.post('/checkin', authMiddleware, checkIn);
router.post('/checkout', authMiddleware, checkOut);
router.get('/my', authMiddleware, getUserAttendance);

module.exports = router;

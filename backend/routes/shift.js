const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const {
  assignShift,
  getUserShifts,
  getAllShifts
} = require('../controllers/shiftController');

// Yönetici mesai ataması yapar
router.post('/assign', authMiddleware, roleMiddleware(['yonetici']), assignShift);

// Personel kendi mesai planını görür
router.get('/my', authMiddleware, roleMiddleware(['personel']), getUserShifts);

// Yönetici tüm atamaları görür
router.get('/all', authMiddleware, roleMiddleware(['yonetici']), getAllShifts);

module.exports = router;

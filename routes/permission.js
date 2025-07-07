const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const {
  requestPermission,
  getAllPermissions,
  updatePermissionStatus
} = require('../controllers/permissionController');

// Personel izin başvurusu yapar
router.post('/request', authMiddleware, roleMiddleware(['personel']), requestPermission);

// İK tüm izinleri görür
router.get('/all', authMiddleware, roleMiddleware(['ik']), getAllPermissions);

// İK izin onay/red verir
router.patch('/:id/status', authMiddleware, roleMiddleware(['ik']), updatePermissionStatus);

module.exports = router;

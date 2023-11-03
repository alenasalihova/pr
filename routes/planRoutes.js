const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

router.post('/create/:planType', planController.createPlan); // Додали :planType
router.get('/user/:userId/type/:planType', planController.getPlansByUserIdAndType); // Додали :planType

module.exports = router;
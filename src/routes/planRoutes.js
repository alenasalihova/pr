const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

router.post('/api/:plans/:planType', planController.createPlan); 
router.get('/api/plans', planController.getPlansByUserIdAndType); 

module.exports = router;
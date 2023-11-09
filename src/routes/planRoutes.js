const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

router.post('/create/:planType', planController.createPlan); 
router.get('/user/:userId/type/:planType', planController.getPlansByUserIdAndType); 

module.exports = router;
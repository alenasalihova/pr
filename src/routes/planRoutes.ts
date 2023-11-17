import express from 'express';
import {
  createPlan,
  getPlansByUserIdAndType,
} from '../controllers/planController';
const planRouter = express.Router();

planRouter.post('/api/:plans/:planType', createPlan);
planRouter.get('/api/plans', getPlansByUserIdAndType);

export default planRouter;

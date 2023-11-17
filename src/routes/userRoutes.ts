import express from 'express';
import { getUserById, register } from '../controllers/userController';
const useRouter = express.Router();

useRouter.post('/register', register);
useRouter.get('/:userId', getUserById);

export default useRouter;

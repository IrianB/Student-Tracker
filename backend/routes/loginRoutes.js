import express from 'express';
import { loginStudent, registerStudent } from '../controllers/loginController.js';

const router = express.Router();

router.post('/register-student', registerStudent)
router.post('/login-student', loginStudent) 

export default router;
import express from 'express';
import { getStudent, registerStudent } from '../controllers/loginController.js';

const router = express.Router();

router.post('/register-student', registerStudent)
router.post('/checkStudent', getStudent) 

export default router;
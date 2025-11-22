import express from 'express';
import { getStudentById } from '../controllers/studentController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/student/:id', auth, getStudentById);

export default router;
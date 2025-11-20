import express from 'express';
import { getStudentById } from '../controllers/studentController.js';

const router = express.Router();

router.get('/student/:id', getStudentById);

export default router;
import express from 'express';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes.js';
import dbCOnnect from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dbCOnnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', loginRoutes);
app.use('/api', studentRoutes);

// Starting Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
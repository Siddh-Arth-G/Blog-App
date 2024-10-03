import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGODB_URL)
    .then( () => {
        console.log('MongoDB is connected');
    }).catch(err => {
        console.log(err);
    });

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on 3000 port...');
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Intenal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
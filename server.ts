// server.ts

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { getData } from './controllers/chartController';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/data', getData);

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017';
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

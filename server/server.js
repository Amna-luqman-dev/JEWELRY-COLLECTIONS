const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Environment variables configuration
dotenv.config();

// Database connect karein
connectDB();

const app = express();

// Middleware taake JSON data ko read kiya ja sake
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Backend server is running successfully!');
});

// User Routes ko yahan connect kiya
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
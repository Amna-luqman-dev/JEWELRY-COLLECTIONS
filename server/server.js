const express = require('express');
const dotenv = require('dotenv');

// Environment variables configuration
dotenv.config();

const app = express();

// Middleware taake JSON data ko read kiya ja sake
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Backend server is running successfully!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const User = require('../models/User'); // Apne User model ka sahi path check kar lein
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT Token generate karne ka function
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// 1. Naya User Register Karna (POST /api/users/register)
const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Check karein ke saari fields bhari hain ya nahi
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check karein ke user pehle se mojood to nahi
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Password ko encrypt (hash) karein
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Naya user database mein banayein
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. User Login Karna (POST /api/users/login)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Email se user dhundein
        const user = await User.findOne({ email });

        // Password match karein
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };

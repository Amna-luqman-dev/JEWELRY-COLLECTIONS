const User = require('../models/userModel');

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        // Check karein ke saari fields mojood hain ya nahi
        if (!fullName || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        // Check karein ke email pehle se registered toh nahi
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Database mein naya user create karein
        // (Note: Aap ke Register form mein fullName, email, phone, password hain)
        const user = await User.create({
            name: fullName,
            email,
            phone,
            password,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.name,
                email: user.email,
                phone: user.phone,
                message: 'User registered successfully!',
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Authenticate a user (Login)
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check karein ke email aur password diya hai ya nahi
        if (!email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        // Check karein ke user database mein mojood hai ya nahi
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                message: 'Login successful!',
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
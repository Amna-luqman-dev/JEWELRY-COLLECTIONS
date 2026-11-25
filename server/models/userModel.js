const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        phone: {
            type: String,
            required: [true, 'Please add a phone number'],
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
    },
    {
        timestamps: true,
    }
);

const User = require('../models/userModel');


module.exports = User;
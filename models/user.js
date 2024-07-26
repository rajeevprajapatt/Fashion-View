const mongoose = require('mongoose');
const { estimatedDocumentCount } = require('../../shortUrl/models/user');
const { type } = require('jquery');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    path:{
        type:String
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
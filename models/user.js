const mongoose = require('mongoose');
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
    path: {
        type: String,
        default: "/images/blank-profile-picture-973460_1280.webp"
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
module.exports = {
    User,
}

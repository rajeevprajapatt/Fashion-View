// const sessionIds = new Map();
const jwt = require("jsonwebtoken");
const secretKey = "Rajeev$63789";

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secretKey, { expiresIn: "90h" });
}

const getUser = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        if (!token) return null;
    }
}

// const setUser = (id, user) => {
//     sessionIds.set(id,user);
// }

// const getUser = (id) => {
//     return sessionIds.get(id);
// }

module.exports = {
    setUser,
    getUser
}
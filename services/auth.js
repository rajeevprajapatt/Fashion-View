// const { set } = require("mongoose");

const sessionIds = new Map();

const setUser = (id, user) => {
    sessionIds.set(id,user);
}

const getUser = (id) => {
    return sessionIds.get(id);
}

module.exports = {
    setUser,
    getUser
}
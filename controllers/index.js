const ctrlWrapper = require("../helpers/ctrlWrapper");

const userRegistration = require("./users/userRegistration");
const userLogin = require("./users/userLogin");
const userLogout = require("./users/userLogout");
const currentUserInfo = require("./users/currentUserInfo");
const updateUserInfo = require("./users/updateUserInfo");

module.exports = {
    userRegistration: ctrlWrapper(userRegistration),
    userLogin: ctrlWrapper(userLogin),
    userLogout: ctrlWrapper(userLogout),
    currentUserInfo: ctrlWrapper(currentUserInfo),
    updateUserInfo: ctrlWrapper(updateUserInfo),
    
}


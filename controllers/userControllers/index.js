const userRegister = require("./userRegister");
const userLogin = require("./userLogin");
const userLogout = require("./userLogout");
const getCurrentUser = require("./getCurrentUser");
const userUpdate = require('./userUpdateAvatar')
module.exports = {
  userRegister,
  userLogin,
  userLogout,
  getCurrentUser,
  userUpdate,
};

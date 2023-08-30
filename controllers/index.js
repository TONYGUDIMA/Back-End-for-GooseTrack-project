const ctrlWrapper = require("../helpers/ctrlWrapper");

const userRegistration = require("./users/userRegistration");
const userLogin = require("./users/userLogin");
const userLogout = require("./users/userLogout");
const currentUserInfo = require("./users/currentUserInfo");
const updateUserInfo = require("./users/updateUserInfo");

const getListReviews = require("./reviews/getListReview");
const getOwnReview = require("./reviews/getOwnReview");
const addReview = require("./reviews/addReview");
const updateOwnReview = require("./reviews/updateOwnReview");
const removeOwnReview = require("./reviews/removeOwnReview");

const getTasksOfMonth = require("./tasks/getTasksOfMonth");
const addTask = require("./tasks/addTask")
const removeTaskById = require("./tasks/removeTaskById")
const updateTask = require("./tasks/updateTask")

module.exports = {
  // Users
  userRegistration: ctrlWrapper(userRegistration),
  userLogin: ctrlWrapper(userLogin),
  userLogout: ctrlWrapper(userLogout),
  currentUserInfo: ctrlWrapper(currentUserInfo),
  updateUserInfo: ctrlWrapper(updateUserInfo),
  // Reviews
  getListReviews: ctrlWrapper(getListReviews),
  getOwnReview: ctrlWrapper(getOwnReview),
  addReview: ctrlWrapper(addReview),
  updateOwnReview: ctrlWrapper(updateOwnReview),
  removeOwnReview: ctrlWrapper(removeOwnReview),
  // Tasks
  getTasksOfMonth: ctrlWrapper(getTasksOfMonth),
  addTask: ctrlWrapper(addTask),
  removeTaskById: ctrlWrapper(removeTaskById),
  updateTask: ctrlWrapper(updateTask)
};

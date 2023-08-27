const ctrlWrapper = require("../helpers/ctrlWrapper");

const userRegistration = require("./users/userRegistration");
const userLogin = require("./users/userLogin");
const userLogout = require("./users/userLogout");
const currentUserInfo = require("./users/currentUserInfo");
const updateUserInfo = require("./users/updateUserInfo");

const getListReviews = require("./reviews/getListReview");
const getReviewById = require("./reviews/getReviewById");
const addReview = require("./reviews/addReview");
const updateReview = require("./reviews/updateReview");
const removeReview = require("./reviews/removeReview");

module.exports = {
// Users
  userRegistration: ctrlWrapper(userRegistration),
  userLogin: ctrlWrapper(userLogin),
  userLogout: ctrlWrapper(userLogout),
  currentUserInfo: ctrlWrapper(currentUserInfo),
  updateUserInfo: ctrlWrapper(updateUserInfo),
// Reviews
  getListReviews: ctrlWrapper(getListReviews),
  getReviewById: ctrlWrapper(getReviewById),
  addReview: ctrlWrapper(addReview),
  updateReview: ctrlWrapper(updateReview),
  removeReview: ctrlWrapper(removeReview),
};

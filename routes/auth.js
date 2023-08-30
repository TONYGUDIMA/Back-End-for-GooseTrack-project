const express = require("express");
const router = new express.Router();
const {
  userRegistration,
  userLogin,
  userLogout,
} = require("../controllers");
const {
  userSignUpValidation,
  userLoginValidation,
} = require("../helpers/joiValidation/JoiUserValidation");
const authMiddleware = require("../middlewares/authMiddlewares");

router.post(
  "/register",
  userSignUpValidation,
  userRegistration
);

router.post(
  "/login",
  userLoginValidation,
  userLogin
);

router.post(
  "/logout",
  authMiddleware,
  userLogout
);
module.exports = router;

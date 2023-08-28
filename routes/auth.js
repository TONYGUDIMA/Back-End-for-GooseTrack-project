const express = require("express");
const router = new express.Router();
const {
  userRegistration,
  userLogin,
} = require("../controllers");
const {
  userSignUpValidation,
  userLoginValidation,
} = require("../helpers/joiValidation/JoiUserValidation");

router.post( "/register", userSignUpValidation, userRegistration );

router.post( "/login", userLoginValidation, userLogin);

module.exports = router;

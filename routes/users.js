const express = require("express");
const router = new express.Router();
const {
  currentUserInfo,
  updateUserInfo,
} = require("../controllers");
const {authMiddlewares, uploadAvatar} = require("../middlewares");

const {
  userInfoValidation,
} = require("../helpers/joiValidation/JoiUserValidation");

router.use(authMiddlewares);


router.get("/current", currentUserInfo);

router.patch("/edit", userInfoValidation, uploadAvatar.single("avatarUrl"),  updateUserInfo);

module.exports = router;

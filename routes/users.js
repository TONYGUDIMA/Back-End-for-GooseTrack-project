const express = require("express");
const router = new express.Router();
const {
  userLogout,
  currentUserInfo,
  updateUserInfo,
} = require("../controllers");
const {authMiddlewares, uploadAvatar} = require("../middlewares");

const {
  userInfoValidation,
} = require("../helpers/joiValidation/JoiUserValidation");

router.use(authMiddlewares);

router.post("/logout", userLogout);

router.get("/current", currentUserInfo);

router.patch("/info", userInfoValidation, uploadAvatar.single("avatarUrl"),  updateUserInfo);

module.exports = router;

const { Router } = require("express");
const router = Router();
const {
  checkUserData,
  uploadAvavtar,
} = require("../../middlewares/usersMiddlewares");
const {
  userRegister,
  userLogin,
  userLogout,
  getCurrentUser,
  userUpdate,
} = require("../../controllers/userControllers");
const {
  protect,
} = require("../../middlewares/authMiddlewares");

router.post(
  "/register",
  checkUserData,
  userRegister
);
router.post("/login", checkUserData, userLogin);
router.post("/logout", protect, userLogout);
router.get("/current", protect, getCurrentUser);
router.patch(
  "/avatars",
  protect,
  uploadAvavtar,
  userUpdate
);
module.exports = router;

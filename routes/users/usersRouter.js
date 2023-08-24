const { Router } = require("express");
const router = Router();

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

router.post("/register", userRegister);

module.exports = router;

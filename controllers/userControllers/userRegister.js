const User = require("../../models/userModel");

const AppError = require("../../helpers/AppError");
const generateAvatarUrl = require("../../services/gravatarGen");
module.exports = async (req, res, next) => {
  try {
    const userExists = await User.exists({
      email: req.body.email,
    });
    if (userExists) {
      throw AppError(409, "Email already in use");
    }
    const avatarUrl = generateAvatarUrl(
      req.body.email
    );
    const newUser = await User.create({
      ...req.body,
      avatarUrl,
    });
    newUser.password = undefined;
    res.status(201).json({
      msg: "Succes",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};

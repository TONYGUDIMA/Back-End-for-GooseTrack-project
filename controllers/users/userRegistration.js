const bcrypt = require("bcrypt");
const User = require("../../models/userModel");
const generateAvatarUrl = require("../../services/gravatarGen");
const AppError = require("../../helpers/AppError");
const {
  signToken,
} = require("../../services/jwtoken");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.exists({ email });
  if (userExists) {
    throw AppError(
      409,
      `Email ${email}  already in use`
    );
  }
  const hashPassword = await bcrypt.hash(
    password,
    10
  );
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl: generateAvatarUrl(req.body.email),
  });

  const signUpUser = await User.findOne({
    email,
  });
  const token = signToken(signUpUser._id);
  await User.findByIdAndUpdate(signUpUser._id, {
    token,
  });

  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

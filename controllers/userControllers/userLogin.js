const User = require("../../models/userModel");
const AppError = require("../../helpers/AppError");
const {
  signToken,
} = require("../../services/jwtoken");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user)
    throw AppError(401, "Not authorized..");

  const passwordIsValid =
    await user.checkPassword(
      password,
      user.password
    );

  if (!passwordIsValid)
    throw AppError(401, "Not authorized..");

  user.password = undefined;

  user.token = signToken(user.id);
  res.status(200).json({
    user,
  });
};

const AppError = require("../helpers/AppError");
const jwtoken = require("../services/jwtoken");
const User = require("../models/userModel");

exports.protect = async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith(
      "Bearer"
    ) && req.headers.authorization.split(" ")[1];
  const userId = jwtoken.checkToken(token);

  const currentUser = await User.findById(userId);
  if (!currentUser)
    throw AppError(401, "Not logged in..");
  currentUser.token =
    req.headers.authorization.split(" ")[1];
  req.user = currentUser;
  req.password = undefined;
  next();
};

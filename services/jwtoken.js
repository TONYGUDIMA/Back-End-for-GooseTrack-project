const jwt = require("jsonwebtoken");
const AppError = require("../helpers/AppError");

exports.signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.checkToken = (token) => {
  if (!token)
    throw AppError(401, "Not logged in..");

  try {
    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return id;
  } catch (err) {
    console.log(err.message);

    throw AppError(401, "Not logged in..");
  }
};

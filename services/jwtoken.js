const jwt = require("jsonwebtoken");
const AppError = require("../helpers/AppError");

const JWT_SECRET = "jwt-secret-phrase";
const JWT_EXPIRES_IN = "10d";

exports.signToken = (id) =>
  jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

exports.checkToken = (token) => {
  if (!token)
    throw AppError(401, "Not logged in..");

  try {
    const { id } = jwt.verify(token, JWT_SECRET);

    return id;
  } catch (err) {
    console.log(err.message);

    throw AppError(401, "Not logged in..");
  }
};

const { isValidObjectId } = require("mongoose");

const { AppError } = require("../helpers/AppError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(AppError(400, `${id} is not valid id`));
  }

  next();
};

module.exports = isValidId;

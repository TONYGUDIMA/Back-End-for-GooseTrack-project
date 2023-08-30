const {
  Task,
} = require("../../models/taskModel");

const {
  AppError,
} = require("../../helpers/AppError");

module.exports = async (req, res) => {
   const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Task.findOneAndUpdate(
   { _id: id, owner }, req.body, {
    new: true,
  });

  if (!result) {
    throw AppError(404, "Not found");
  }

  res.json(result );
};

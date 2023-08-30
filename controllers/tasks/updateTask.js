const {
  Task,
} = require("../../models/taskModel");

const {
  AppError,
} = require("../../helpers/AppError");

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findOneAndUpdate(
    {
      id
    },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw AppError(404, "Not found");
  }

  res.json({ updatedReview: result });
};

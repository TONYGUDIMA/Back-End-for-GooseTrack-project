const {
  Review,
} = require("../../models/reviewModel");

const {
  AppError,
} = require("../../helpers/AppError");

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findByIdAndRemove(
    id
  );

  if (!result) {
    throw AppError(404, "Not found");
  }

  res.json({ message: "Review deleted" });
};

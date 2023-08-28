const {
  Review,
} = require("../../models/reviewModel");

const {
  AppError,
} = require("../../helpers/AppError");

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findOneAndUpdate(
    {
      owner: req.user._id,
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

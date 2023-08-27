const { Review } = require("../../models/review");

const { AppError } = require("../../helpers/AppError");

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw AppError(404, "Not found");
  }

  res.json(result);
};

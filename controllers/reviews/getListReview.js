const { Review } = require("../../models/review");

module.exports = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 1 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Review.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

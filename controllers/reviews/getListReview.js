const {
  Review,
} = require("../../models/reviewModel");

module.exports = async (req, res) => {
  const result = await Review.find().populate({
    path: "owner",
    select: ["name", "avatarUrl"],
  });
  res.json(result);
};

const {
  Review,
} = require("../../models/reviewModel");

module.exports = async (req, res) => {
  const result = await Review.find().populate(
    "owner"
  );
  res.json(result);
};

const { Review } = require("../../models/review");

module.exports = async (req, res) => {
  const result = await Review.find();
  res.json(result);
};

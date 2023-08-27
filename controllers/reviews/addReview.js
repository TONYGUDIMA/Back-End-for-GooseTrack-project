const { Review } = require("../../models/review");

module.exports = async (req, res) => {
  const result = await Review.create(req.body);
  res.status(201).json(result);
};

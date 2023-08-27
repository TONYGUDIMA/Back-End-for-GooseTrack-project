const {
  Review,
} = require("../../models/reviewModel");

module.exports = async (req, res) => {
  const result = await Review.create(req.body);
  res.status(201).json(result);
};

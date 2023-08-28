const {
  Review,
} = require("../../models/reviewModel");

module.exports = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.create({
    ...req.body,
    owner,
  });
  res.status(201).json(result);
};

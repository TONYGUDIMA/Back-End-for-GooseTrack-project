const AppError = require("../../helpers/AppError");
const {
  Review,
} = require("../../models/reviewModel");

module.exports = async (req, res) => {
  const { _id: owner } = req.user;
  const reviewExist = await Review.find({
    owner: req.user._id,
  });
  
  if (reviewExist.length > 0) {
    throw AppError(
      409,
      "This user already left review"
    );
  }

  const result = await Review.create({
    ...req.body,
    owner,
  });
  res.status(201).json(result);
};

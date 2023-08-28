const express = require("express");

const router = express.Router();

const {
  getListReviews,
  getOwnReview,
  addReview,
  updateOwnReview,
  removeOwnReview,
} = require("../controllers");

const {
  isValidId,
  authMiddlewares,
} = require("../middlewares");
const {
  reviewsAddSchema,
  reviewsEditSchema,
} = require("../helpers/joiValidation/JoiReviewsValidation");

router.get("/", getListReviews);

router.use(authMiddlewares);

router.post("/own", reviewsAddSchema, addReview);

router.get("/own", getOwnReview);

router.put(
  "/own",
  reviewsEditSchema,
  updateOwnReview
);

router.delete("/own", removeOwnReview);

module.exports = router;

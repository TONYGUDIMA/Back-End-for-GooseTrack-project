const express = require("express");

const router = express.Router();

const {
  getListReviews,
  getReviewById,
  addReview,
  updateReview,
  removeReview,
} = require("../controllers");

const { isValidId, authMiddlewares } = require("../middlewares");
const {
  reviewsAddSchema,
  reviewsEditSchema,
} = require("../helpers/joiValidation/JoiReviewsValidation");


router.get("/", getListReviews);

router.use(authMiddlewares);

router.get("/my-review/:id", isValidId, getReviewById);

router.post("/", reviewsAddSchema, addReview);

router.put("/my-review/:id", isValidId, reviewsEditSchema, updateReview);

router.delete("/my-review/:id", isValidId, removeReview);

module.exports = router;

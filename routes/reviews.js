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

router.get("/own/:id", isValidId, getReviewById);

router.post("/", reviewsAddSchema, addReview);

router.put("/own/:id", isValidId, reviewsEditSchema, updateReview);

router.delete("/own/:id", isValidId, removeReview);

module.exports = router;

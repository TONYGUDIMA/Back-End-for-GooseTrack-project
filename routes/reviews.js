const express = require("express");

const router = express.Router();

const {
  getListReviews,
  getReviewById,
  addReview,
  updateReview,
  removeReview,
} = require("../controllers");

const authMiddleware = require("../middlewares/authMiddlewares");

const { validateBody, isValidId } = require("../middlewares");
const { reviewsAddSchema, reviewsEditSchema } = require("../models/review");

router.get("/", authMiddleware, getListReviews);

router.get("/my-review/:id", authMiddleware, isValidId, getReviewById);

router.post("/", authMiddleware, validateBody(reviewsAddSchema), addReview);

router.put(
  "/my-review/:id",
  authMiddleware,
  isValidId,
  validateBody(reviewsEditSchema),
  updateReview
);

router.delete("/my-review/:id", authMiddleware, isValidId, removeReview);

module.exports = router;

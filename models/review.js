const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, "Set rating for required"],
      enum: [1, 2, 3, 4, 5],
      min: 0,
      max: 5,
      default: 0,
    },
    comment: {
      type: String,
      maxLength: 300,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Joi = require("joi");

const reviewsAddSchema = Joi.object({
  rating: Joi.number().required().min(0).max(5),
  comment: Joi.string().required().max(300),
});

const reviewsEditSchema = Joi.object({
  rating: Joi.number().min(0).max(5),
  comment: Joi.string().max(300),
})
  .or("rating", "comment", "imgURL")
  .required();

const Review = model("review", reviewSchema);

module.exports = {
  Review,
  reviewsAddSchema,
  reviewsEditSchema,
};

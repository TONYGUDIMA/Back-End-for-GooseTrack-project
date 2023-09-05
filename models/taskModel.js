const { model, Schema } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const timeRegexp =
/^([01]\d|2[0-3]):[0-5]\d$/;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 3,
      maxlength: 250,
      required: [true, "Title is required"],
    },
    start: {
      type: String,
      match: timeRegexp,
      required: true,
     
    },
    end: {
      type: String,
      match: timeRegexp,
      required: true,
      validate: {
        validator: function (value) {
          return value >= this.start;
        },
        message: 'Not valid time. It is expected that the end will be longer from the start',
      },

    },
    date: String,
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = {
  Task,
};

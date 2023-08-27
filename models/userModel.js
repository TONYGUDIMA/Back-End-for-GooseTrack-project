const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already in use"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      default: "",
    },
    birthday: {
      type: Date,
      default: "",
    },
    skype: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
    },
  },
  {
    versionKey: false, timestamps: true
  }
);
userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

module.exports = User;

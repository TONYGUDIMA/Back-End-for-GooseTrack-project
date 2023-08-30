const { model, Schema } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; 

const taskSchema = new Schema({
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
         default: "09:00",
    },
    end: {
        type: String,
      match: timeRegexp,
         required: true,
        default: "09:30",
    },
  date: Date,
     priority: {
      type: String,
       enum: ["low", "medium", "high"] 
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"]
      
    },
    owner: {
      type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
},
    { versionKey: false, timestamps: true }
)

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = {
  Task
};
const JoiTasksValidation = require("../../helpers/joiValidation/JoiTasksValidation");
const {
  Task,
} = require("../../models/taskModel");

module.exports = async (req, res) => {
  const { month, year } = req.query;
  console.log(month, year);
  const startOfMonth = new Date(
    year,
    month - 1,
    1
  ).toLocaleDateString("fr-CA");
  const endOfMonth = new Date(
    year,
    month,
    0,
    23,
    59,
    59,
    999
  ).toLocaleDateString("fr-CA");
  console.log(startOfMonth, endOfMonth);
  const tasks = await Task.find({
    owner: req.user._id,
    date: {
      $gte: startOfMonth,
      $lte: endOfMonth,
    },
  });
  res.status(200).json(tasks);
};

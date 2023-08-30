const JoiTasksValidation = require("../../helpers/joiValidation/JoiTasksValidation");
const { Task } = require("../../models/taskModel");


module.exports = async (req, res) => {
  const { _id: owner } = req.user;
  const {
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
  } = req.query;

  const startOfMonth = new Date(year, month -1, 1).toLocaleDateString('fr-CA')
 
  console.log(startOfMonth)///2023-08-01

  const endOfMonth = new Date(year, month , 0).toLocaleDateString('fr-CA')
  console.log(endOfMonth)///2023-08-31
  const tasks = await Task.find({
    owner,
    date: { $gte: new Date(startOfMonth), $lte: new Date(endOfMonth) },
  });

  res.status(200).json( tasks );

};


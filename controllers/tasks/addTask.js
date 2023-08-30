
const {Task} = require("../../models/taskModel");


module.exports = async (req, res) => {
  const { _id: owner } = req.user;
  const task = await Task.create({
    ...req.body,
    owner,
  });
  res.status(201).json(task);
};

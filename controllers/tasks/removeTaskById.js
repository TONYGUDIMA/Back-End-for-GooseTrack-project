
const AppError = require("../../helpers/AppError");
const {Task} = require("../../models/taskModel");


module.exports = async (req, res) => {
    const { id } = req.params;
   const { _id: owner} =req.user
    const result = await Task.findByIdAndDelete({ _id: id, owner });
    if(!result) {
        throw AppError(404, "Not found")
    }

    res.json({
        message: "Delete success"
    })
};

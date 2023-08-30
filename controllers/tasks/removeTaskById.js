
const Task = require("../../models/taskModel");


module.exports = async (req, res) => {
    const { _id } = req.params;
    const result = await Task.findByIdAndDelete(_id);
    if(!result) {
        throw HttpError(404, "Not found")
    }

    res.json({
        message: "Delete success"
    })
};

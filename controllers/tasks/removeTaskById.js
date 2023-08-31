
const {Task} = require("../../models/taskModel");


module.exports = async (req, res) => {
    const { id } = req.params;
   
    const result = await Task.findByIdAndDelete(id);
    if(!result) {
        throw HttpError(404, "Not found")
    }

    res.json({
        message: "Delete success"
    })
};

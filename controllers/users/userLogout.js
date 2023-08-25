const User = require("../../models/userModel");


module.exports = async (req, res) => {
    const { _id } = req.user;
    console.log(_id)
    console.log(req.user)
    await User.findByIdAndUpdate( _id, { token: '' })
      res.status(200).json({
            message: "Logout success",
        });
}
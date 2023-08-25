const User = require("../../models/userModel");

module.exports = async (req, res) => {
    const { _id } = req.user;

    const { name, email, phone, birthday, skype} = req.body;
   
     await User.findByIdAndUpdate(_id, {
        name,
        email,
        phone,
        birthday,
        skype,
      });
    
    res.status(201).json({
        message: "Update successfully",
        name,
        email,
        phone,
        birthday,
        skype,
    })
}
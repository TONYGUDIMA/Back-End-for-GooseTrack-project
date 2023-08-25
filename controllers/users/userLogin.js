const bcrypt = require('bcrypt');
const User = require("../../models/userModel");
const AppError = require("../../helpers/AppError");
const {signToken} = require("../../services/jwtoken");

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || ! await bcrypt.compare(password, user.password)) {
        throw AppError(401, `Email or password is wrong`)
    }
    const token = signToken(user._id);
   await User.findByIdAndUpdate(user._id, {token})

     res.status(200).json({
        message: "Succes",
        token,
        user: {
        name: user.name,
        email: user.email,
        }
    })
}


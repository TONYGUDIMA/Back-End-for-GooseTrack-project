const User = require("../../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const currentUser = await User.findById(
      req.user.id
    );
    currentUser.token = undefined;
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const {
  saveMulterImage,
} = require("../../services/multerService");

module.exports = async (req, res) => {
  const { user, file } = req;

  if (file) {
    user.avatarUrl = await saveMulterImage(
      file,
      {
        height: 250,
        width: 250,
        maxSize: 2 * 1024 * 1024,
      },
      "avatars"
    );
  }

  Object.keys(req.body).forEach((key) => {
    user[key] = req.body[key];
  });

  const updatedUser = await user.save();
  res.status(200).json({
    user: updatedUser,
  });
};

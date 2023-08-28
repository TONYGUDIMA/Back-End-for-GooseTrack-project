module.exports = async (req, res) => {
  const {
    _id,
    name,
    email,
    phone,
    birthday,
    skype,
    avatarUrl,
  } = req.user;

  res.status(200).json({
    email,
    _id,
    avatarUrl,
    phone,
    skype,
    name,
    birthday,
  });
};

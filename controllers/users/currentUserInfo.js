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

// {
//   "email": "user@example.com",
//   "_id": "string",
//   "avatarURL": "string",
//   "phone": "string",
//   "skype": "string",
//   "name": "string",
//   "birthday": "string"
// }

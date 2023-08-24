module.exports = async (req, res, next) => {
  try {
    const currentUser = await req.user;
    res.status(200).json({
      msg: "current user",
      currentUser,
    });
  } catch (error) {
    next(error);
  }
};

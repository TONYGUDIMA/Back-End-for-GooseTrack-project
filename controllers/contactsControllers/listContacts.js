const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");
module.exports = async (req, res, next) => {
  try {
    const allContacts = await Contact.find({
      owner: req.user.id,
    });

    if (!allContacts) {
      throw AppError(404, "Not found");
    }
    res.status(200).json({
      message: "Your contacts",
      contacts: allContacts,
    });
  } catch (error) {
    next(error);
  }
};

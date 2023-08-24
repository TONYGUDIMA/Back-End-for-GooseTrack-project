const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");

module.exports = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findById(
      contactId
    );
    if (!contactById) {
      throw AppError(404, "Not found");
    }
    res.status(200).json({
      message: "Contact got by id",
      contactById: contactById,
    });
  } catch (error) {
    next(error);
  }
};

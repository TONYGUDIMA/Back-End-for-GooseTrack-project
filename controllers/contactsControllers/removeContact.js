const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");

module.exports = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result =
      await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw new AppError(404, "Not Found");
    }
    res.status(200).json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
};

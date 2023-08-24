const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");
const {
  contactsValidationSchema,
} = require("../../helpers/contactsValidator");

module.exports = async (req, res, next) => {
  try {
    const { error, value } =
      contactsValidationSchema(req.body);
    if (error) {
      throw AppError(404, error.message);
    }
    const { contactId } = req.params;
    const result =
      await Contact.findByIdAndUpdate(
        contactId,
        value
      );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

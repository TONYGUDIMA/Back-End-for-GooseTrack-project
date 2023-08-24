const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");

module.exports = async (
  req,
  res,
  next
) => {
  try {
    const { contactId } = req.params;
    if (req.body.favorite) {
      const result =
        await Contact.findByIdAndUpdate(
          contactId,
          req.body
        );
      res.status(201).json(result);
    } else {
      throw AppError(
        400,
        "missing field favorite"
      );
    }
  } catch (error) {
    next(error);
  }
};

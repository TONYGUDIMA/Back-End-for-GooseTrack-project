const Contact = require("../../models/contactsModel");

module.exports = async (req, res, next) => {
  try {
    const newContact = {
      ...req.body,
      owner: req.user,
    };
    const result = await Contact.create(
      newContact
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

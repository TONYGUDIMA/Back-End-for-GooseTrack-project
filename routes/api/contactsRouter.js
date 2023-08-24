const { Router } = require("express");
const router = Router();
const {
  checkContactData,
} = require("../../middlewares/contactMiddlewares");
const {
  listContacts,
  removeContact,
  addContact,
  getContactById,
  updateContact,
  updateContactsFavorite,
} = require("../../controllers/contactsControllers");

const {
  protect,
} = require("../../middlewares/authMiddlewares");
router.use(protect);
router.get("/", listContacts);
router.get("/:contactId", getContactById);
router.post("/", checkContactData, addContact);
router.delete("/:contactId", removeContact);
router.put(
  "/:contactId",
  checkContactData,
  updateContact
);
router.put(
  "/:contactId/favorite",
  updateContactsFavorite
);

module.exports = router;

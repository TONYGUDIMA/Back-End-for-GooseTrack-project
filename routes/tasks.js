const express = require("express");
const {
  authMiddlewares,
  validateBody,
  isValidId,
} = require("../middlewares");
const {
  getTasksOfMonth,
  addTask,
  removeTaskById,
  updateTask,
} = require("../controllers");
const {
  addSchema,
} = require("../helpers/joiValidation/JoiTasksValidation");

const router = express.Router();

router.use(authMiddlewares);

router.get("/query", getTasksOfMonth);
router.post("/", addSchema, addTask);
router.patch("/:id", addSchema, updateTask);
router.delete("/:id", removeTaskById);

module.exports = router;

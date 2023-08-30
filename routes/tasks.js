const express = require("express");
const { authMiddlewares, validateBody, isValidId } = require("../middlewares");
const {getTasksOfMonth, addTask, removeTaskById, updateTask} = require("../controllers");
const { addSchema } = require("../helpers/joiValidation/JoiTasksValidation");

const router = express.Router();



router.get('/', authMiddlewares, getTasksOfMonth);
router.post('/',authMiddlewares, addSchema, addTask);
router.patch('/:id',authMiddlewares, addSchema, updateTask);
router.delete('/:id', isValidId, removeTaskById);

module.exports = router;
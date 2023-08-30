const Joi = require('joi');
const validateBody = require("../../middlewares/validateBody");

const priorityItem = ["low", "medium", "high"]
const categoryItem = ["to-do", "in-progress", "done"]


const addSchema = Joi.object({
    title: Joi.string().min(3).max(250).required(),
    start: Joi.string().required(),
    end: Joi.string().required(),
    priority: Joi.string().valid(...priorityItem).required(),
    category:  Joi.string().valid(...categoryItem).required(),
    date: Joi.string().required(),
   
})

module.exports = {
    addSchema: validateBody(addSchema),
   
    }
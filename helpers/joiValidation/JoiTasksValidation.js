const Joi = require('joi');
const validateBody = require("../../middlewares/validateBody");
const priorityItem = ["low", "medium", "high"]
const categoryItem = ["to-do", "in-progress", "done"]


const DATA_REGEX =/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/
const TIME_REGEX =  /^([01]\d|2[0-3]):[0-5]\d$/;

const validateStartEndTime = (obj, helpers) => {
  function toMinute(time) {
    const arrTime = time.split(':');
    return Number(arrTime[0]) * 60 + Number(arrTime[1]);
  }
  const { start, end } = obj;
    if (toMinute(start) >= toMinute(end)) {
    return helpers.error('any.invalid');
  }
};

const addSchema = Joi.object({
    title: Joi.string().min(3).max(250).required(),
    start: Joi.string().pattern(TIME_REGEX).min(5).max(5).required().messages({
    'string.pattern.base': `The field "start" must be of the following type "hh:mm"`,
  }),
    end: Joi.string().pattern(TIME_REGEX).min(5).max(5).required().messages({
    'string.pattern.base': `The field "end" must be of the following type "hh:mm"`,
  }),
    priority: Joi.string().valid(...priorityItem).required(),
    category:  Joi.string().valid(...categoryItem).required(),
    date: Joi.string().pattern(DATA_REGEX).min(10).max(10).required().messages({
    'string.pattern.base': `The field "date" must be of the following type "YYYY-MM-DD"`,
  }),
   
}).custom(validateStartEndTime)
  .messages({
    'any.invalid': `The following condition must be met start<end`,
  });

module.exports = {
    addSchema: validateBody(addSchema),
   
    }
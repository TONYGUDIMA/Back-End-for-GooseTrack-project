const Joi = require('joi');
const validateBody = require("../../middlewares/validateBody")


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
//  min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/; 


const userSignUpValidation = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().pattern(EMAIL_REGEX).required(),
            password: Joi.string().min(5).max(20).pattern(PASSWORD_REGEX).required(),
});
        
const userLoginValidation = Joi.object({
            email: Joi.string().pattern(EMAIL_REGEX).required(),
            password: Joi.string().min(5).max(20).pattern(PASSWORD_REGEX).required(),
});


const userInfoValidation = Joi.object({
            name: Joi.string().min(3),
            email: Joi.string().pattern(EMAIL_REGEX),
            phone: Joi.string().pattern(PHONE_REGEX),
            birthday: Joi.date().min("01-01-1930").max(new Date()),
            skype: Joi.string().min(3).max(20),
});

module.exports = {
    userSignUpValidation: validateBody(userSignUpValidation),
    userLoginValidation: validateBody(userLoginValidation),
    userInfoValidation: validateBody(userInfoValidation)
};
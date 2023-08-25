const express = require('express');
const router = new express.Router();
const { userLogout, currentUserInfo, updateUserInfo} = require('../controllers');
const authMiddleware = require('../middlewares/authMiddlewares');
const { userInfoValidation } = require("../models/joiValidation/JoiUserValidation");

router.use(authMiddleware);

router.post('/logout', userLogout);

router.get('/current', currentUserInfo);

router.patch('/info', userInfoValidation, updateUserInfo)




module.exports = router;


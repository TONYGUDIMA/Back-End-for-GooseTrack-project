
const authMiddlewares = require('./authMiddlewares');
const uploadAvatar = require('./uploadAvatar');
const validateBody = require('./validateBody');
const isValidId = require('./isValidId')

module.exports = {
    authMiddlewares,
    uploadAvatar,
    validateBody,
    isValidId

}


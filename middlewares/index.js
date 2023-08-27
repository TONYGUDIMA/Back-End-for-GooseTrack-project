const authMiddleware = require('./authMiddlewares');
const uploadAvatar = require('./uploadAvatar');
const validateBody = require('./validateBody');

module.exports = {
    authMiddleware,
    uploadAvatar,
    validateBody,
}
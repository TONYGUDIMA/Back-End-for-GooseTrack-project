const authMiddlewares = require('./authMiddlewares');
const uploadAvatar = require('./uploadAvatar');
const validateBody = require('./validateBody');

module.exports = {
    authMiddlewares,
    uploadAvatar,
    validateBody,
}
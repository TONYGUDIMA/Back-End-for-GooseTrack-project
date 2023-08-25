const AppError = require ("../helpers/AppError")

const validateBody = schema => {
    return (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            next(AppError(400, error.message));
        }
        next()
    }

   
}

module.exports = validateBody;
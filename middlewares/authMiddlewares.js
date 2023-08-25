const AppError = require("../helpers/AppError");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const {JWT_SECRET} = process.env;

const authMiddleware = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
        next(AppError(401, 'Not authorized'));
    }
    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);
        
        if (!user || !user.token || user.token !== token) {
            next(AppError(401, 'Not authorized')); 
        }
        req.user = user;
        next();
    }
    catch {
        next(AppError(401, 'Not authorized'));
    }
}

module.exports = authMiddleware;
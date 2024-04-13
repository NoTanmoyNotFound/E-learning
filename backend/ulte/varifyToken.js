import jwt from "jsonwebtoken"
import { errorHandler } from "./error.js";


export const varifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);

    if (!token) {
        return next(errorHandler(401, "You are not authenticated"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => { 
        if(err) return next(errorHandler(403, "Invalid token"));

        req.user = user;
        next();
    })

}
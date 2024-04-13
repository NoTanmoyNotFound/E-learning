import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../ulte/error.js";
import jwt from "jsonwebtoken";
import validator from 'email-validator';

export const signup = async (req, res, next) => {
    const { name, username, email, password } = req.body;

    // const isValid = validator.validate(email);
  
    // if(!isValid){
    //     return next(errorHandler(400, "Invalid Email"));    
        
    // }
    const validUser = await User.findOne({ email });

    if (validUser) {
        return next(errorHandler(404, "User already exists"));
    }


    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ name, username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ massage: "User is created" });

    } catch (err) {
        next(err);
    }

}


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {

        const validUser = await User.findOne({ email });
       

        if (!validUser) {
            return next(errorHandler(404, "User not found"));
        }
        const validPassword = await bcryptjs.compare(password, validUser.password);
       

        if (!validPassword) {
            return next(errorHandler(404, "Wrong password"));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
    



        const fiveDaysInSeconds = 5 * 24 * 60 * 60; // 5 days in seconds
        var expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (fiveDaysInSeconds * 1000));
        var expires = "expires=" + expirationDate.toUTCString();

        res.cookie('access_token', token, { httpOnly: true, expires: expirationDate }).status(200).json(rest);

    } catch (err) {
        next(err, "op op");
    }

}

export const google = async (req, res, next) => {
    const { email } = req.body;
    try{
        console.log("this is ");

        const validuser = await User.findOne({ email})

            if (validuser) {
            const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword, ...rest } = validuser._doc;

            const fiveDaysInSeconds = 5 * 24 * 60 * 60; // 5 days in seconds        
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (fiveDaysInSeconds * 1000));
            var expires = "expires=" + expirationDate.toUTCString();
            res.cookie('access_token', token, { httpOnly: true, expires: expirationDate }).status(200).json(rest);

        }
        else{

            const gerratedPassword = Math.random().toString(36).slice(-8); 
            const hashedPassword = await bcryptjs.hash(gerratedPassword, 10);
         

            const newUser = new User({ name: req.body.name, username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8), email: req.body.email, password: hashedPassword, profilePicture: req.body.photo });
         
           const sta = await newUser.save();
           console.log(sta);
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;

            const fiveDaysInSeconds = 5 * 24 * 60 * 60; // 5 days in seconds    
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (fiveDaysInSeconds * 1000));
            var expires = "expires=" + expirationDate.toUTCString();
            res.cookie('access_token', token, { httpOnly: true, expires: expirationDate }).status(200).json(rest);
        }

    }
    catch(err){
        next(err)
    }

}

export const signout = async (req, res, next) => {
    console.log("ok");

    try {
        res.clearCookie('access_token').status(200).json('Signout success!');
        
    } catch (error) {
        console.log(error);
        console.log("this ");
        
    }


}
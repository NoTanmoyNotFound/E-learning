import User from "../models/user.model.js";
import UserOtp from "../models/userotp.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../ulte/error.js";
import jwt from "jsonwebtoken";
import validator from 'email-validator';
import nodemailer from 'nodemailer';

//email set up

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'readx1260@gmail.com',
        pass: 'lorebguxfhukuvdk'
    },

    
});







export const signup = async (req, res, next) => {
    const { name, username, email, password } = req.body;

    const isValid = validator.validate(email);
  
    if(!isValid){
        return next(errorHandler(400, "Invalid Email"));    
        
    }
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
        console.log(validPassword);

        if (!validPassword) {
            return next(errorHandler(404, "Wrong password"));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        console.log(token , rest);



        const fiveDaysInSeconds = 5 * 24 * 60 * 60; // 5 days in seconds
        var expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (fiveDaysInSeconds * 1000));
        var expires = "expires=" + expirationDate.toUTCString();

        

        res.cookie('access_token', token, {  
            httpOnly: true,
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), 
            path: '/',
            sameSite: 'none',
            secure: true,     
        }).status(200).json(rest);

    } catch (err) {
        next(err, "op op");
    }

}

export const google = async (req, res, next) => {
    const { email } = req.body;
    try{
        // console.log("this is ");

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
    // console.log("ok");

    try {
        res.clearCookie('access_token').status(200).json('Signout success!');
        
    } catch (error) {
        console.log(error);
        console.log("this ");
        
    }


}




//fogot password

export const forgotPassword = async (req, res, next) => {

    const { email } = req.body;

    console.log(email);


    try {
        const preuser = await User.findOne({ email });

        if (preuser) {
       
                const OTP = Math.floor(100000 + Math.random() * 900000);
                const existEmail = await UserOtp.findOne({ email: email });

                if (existEmail) {
                    const updateData = await UserOtp.findByIdAndUpdate({ _id: existEmail._id }, {
                        otp: OTP
                    }, { new: true });

                    await updateData.save();

                    const mailOption = {
                        from: process.env.EMAIL,
                        to: email,
                        subject: "Sending Email for Otp validation",
                        text: `OTP:-${OTP}`
                    };
                    console.log (transporter)
              

                    transporter.sendMail(mailOption, (error, info) => {
                        if (error) {
                            console.log("error", error);
                            res.status(400).json({ error: 'Email not send' });
                        } else {
                            console.log("Email send", info.response);
                            res.status(200).json({ message: "Email Successfully sent" });
                        }
                    });

                } else {
                    const saveOtpData = new UserOtp({
                        email, otp: OTP
                    });

                    await saveOtpData.save();

                    const mailOption = {
                        from: process.env.EMAIL,
                        to: email,
                        subject: "Sending Email for Otp validation",
                        text: `OTP:-${OTP}`
                    };

                    transporter.sendMail(mailOption, async (error, info) => {
                        if (error) {
                            console.log("error", error);
                            res.status(400).json({ error: 'Email not send' });
                        } else {
                            console.log("Email send", info.response);
                            res.status(200).json({ message: "Email Successfully sent" });
                        }
                    });

                    // Schedule a function to remove 'otp' field after 5 minutes
                    setTimeout(async () => {
                        const updatedSaveOtpData = await UserOtp.findOne({ email: email, otp: OTP });
                        if (updatedSaveOtpData) {
                            console.log('Removing otp field after 5 minutes');
                            await UserOtp.findOneAndUpdate({ _id: updatedSaveOtpData._id }, { $unset: { otp: 1 } });
                        }
                    }, 5 * 60 * 1000);
                }
            
        } else {
            res.status(400).json({ error: "This User not exist in our db" });
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid details", error });
    }
}



export const chackOtp = async (req, res, next) => {

    const { password,email, otp } = req.body;

    try {

        const existEmail = await UserOtp.findOne({ email: email });
        if (existEmail) {

            if (existEmail.otp === otp) {
                const hashedPassword = await bcryptjs.hash(password, 10);
                const currentuser = await User.findOne({ email: email });
                console.log(currentuser);
                if (currentuser) {
                    const updatedUser = await User.findByIdAndUpdate(currentuser._id, { password: hashedPassword }, { new: true });
                    return res.status(200).json({ message: "Otp verified successfully and Password Updated" });
                }
            }else{
                return next(errorHandler(404, "Otp Wrong"));
            }
        }
            
    } catch (error) {
        console.log(error);
        return next(errorHandler(404, "Somthing Wrong"));

    }




}
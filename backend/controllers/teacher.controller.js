import TeacherJoin from "../models/teacherJoin.model.js"
import validator from 'email-validator';
import { errorHandler } from "../ulte/error.js";


// Teacher Join Controller
export const teacherask = async (req, res, next) => {

    const  { fullname, email,phone, organization, idProof, resume, video } = req.body;
    const isValid = validator.validate(email);  

    if(!isValid){
        return next(errorHandler(400, "Invalid Email"));
    }

    const validUser = await TeacherJoin.findOne({ email });
    if (validUser) {
        return next(errorHandler(404, "User already exists"));
    }

    try{

        const newTeacher = new TeacherJoin({ fullname, email, phone, organization, idProof, resume, video });
        await newTeacher.save();
        res.status(201).json({ success: true, massage: "Request is Send" });

    }

    catch (err) {
       return next(errorHandler(404, "User already exists"));
    }




}




import TeacherJoin from "../models/teacherJoin.model.js"
import User from "../models/user.model.js";
import CourseStructure from '../models/courseUploadModel.js';
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




export const getcourse = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try {
        const Teacher = await User.findById(id);
        console.log(Teacher);
        const courser = await CourseStructure.find({ authorEmail: Teacher.email });
        res.status(200).json({ success: true, data: courser });
    } catch (error) {
        console.error("Error fetching  data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }

}

export const deleteUploadedCourse = async (req, res, next) => {
    const courseId = req.params.id;

    try {
        
        const course = await CourseStructure.findById(courseId);
        if (!course) {
            return next(errorHandler(404, "Course not found"));
        }

        
        await CourseStructure.findByIdAndDelete(courseId);
        
        res.status(200).json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}


export const singleCourse = async (req, res, next) => {
    const id = req.params.id
    try {
        const courser = await CourseStructure.findById(id);
        res.status(200).json({ success: true, data: courser });
    } catch (error) {
        console.error("Error fetching  data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



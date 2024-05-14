import TeacherJoin from "../models/teacherJoin.model.js"
import User from "../models/user.model.js";
import CourseStructure from '../models/courseUploadModel.js';
import validator from 'email-validator';
import { errorHandler } from "../ulte/error.js";
import mongoose from 'mongoose';
import TeacherPayment from "../models/teacherPayment.model.js";
import Payment from "../models/payment.model.js";

// Teacher Join Controller
export const teacherask = async (req, res, next) => {

    const { fullname, email, phone, organization, idProof, resume, video } = req.body;
    const isValid = validator.validate(email);

    if (!isValid) {
        return next(errorHandler(400, "Invalid Email"));
    }

    const validUser = await TeacherJoin.findOne({ email });
    if (validUser) {
        return next(errorHandler(404, "User already exists"));
    }

    try {

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
    const id = req.params.id;
    console.log(id);

    try {
        const courser = await CourseStructure.findById(req.params.id);
        if (!courser) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }
        res.status(200).json({ success: true, data: courser });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const teacherPayment = async (req, res, next) => {
    const { teacher_id, bank_holder_name, email, ph_number, acc_number, branch_name, ifce, upi } = req.body;
    try {
        const paymentDetails = await TeacherPayment.findOne({ teacher_id });
        if (paymentDetails) {
            const courseUpdate = await TeacherPayment.findByIdAndUpdate(
                paymentDetails._id,
                {
                    $set: {
                        bank_holder_name: req.body.bank_holder_name,
                        email: req.body.email,
                        ph_number: req.body.ph_number,
                        acc_number: req.body.acc_number,
                        branch_name: req.body.branch_name,
                        ifce: req.body.ifce,
                        upi: req.body.upi,
                    }
                },
                { new: true }
            );
    
            res.status(200).json({ success: true, massage: "Payment Details is Send" });
        }else{
        const newPayment = new TeacherPayment({ teacher_id, bank_holder_name, email, ph_number, acc_number, branch_name, ifce, upi });
        await newPayment.save();
        res.status(201).json({ success: true, massage: "Payment Details is Send" });
        }
    } catch (error) {
        res.status(400).json({ success: false, massage: "Payment Details is not Send" });
    }



}



export const getcoursePayment = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try {
        const Teacher = await User.findById(id); 
        const courser = await Payment.find({ teacherEmail: Teacher.email });
        res.status(200).json({ success: true, data: courser });
    } catch (error) {
        console.error("Error fetching  data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }    
}




import User from "../models/user.model.js";
import UserInfo from "../models/userinfo.model.js"; 
import Contact from "../models/contact.modal.js";
import CareerSuport from "../models/careerSuport.model.js";
import Payment from "../models/payment.model.js";
import Feedback from "../models/feedbackModel.js";
import CourseStructure from '../models/courseUploadModel.js';
import bcryptjs from "bcryptjs";    
import { errorHandler } from "../ulte/error.js";




export const updateUser = async (req, res, next) =>{

    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: {
                    name: req.body.fullname,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    collage: req.body.company,
                    profilePicture: req.body.profilePicture,
                }
            },
            { new: true }
            );
            const { password, ...rest } = updatedUser._doc;

            res.status(200).json(rest);



    }catch (error){
        next(error)
    }
}

// user information update
export const updateUserInfo = async (req, res, next) =>{
    const {userid} = req.body;
    try{
        const currentUser = await UserInfo.findOne({ userid: userid });
     

        const userInfo = await UserInfo.findByIdAndUpdate(
            currentUser._id,
            {
                $set: {
                    collage: req.body.collage,
                    bio: req.body.bio,
                    birth: req.body.birth,
                    country: req.body.country,
                    phone: req.body.phone,
                    gender: req.body.gender,
                    language: req.body.language, 
                    twiter: req.body.twitter ,
                    instagram: req.body.instagram, 
                    facebook: req.body.facebook ,
                    linkedin: req.body.linkedin , 
                    github: req.body.github ,
                    courses: req.body.course ,  
                }
            },
            { new: true }
            );
           

            res.status(200).json(userInfo);

    }catch (error){
        next(error)
    }
}









export const deleteUser = async (req, res, next) =>{
  const {email, password} = req.body;

  const validUser = await User.findOne({ email: email });
  const userinfo = await UserInfo.findOne({ userid: validUser._id });

  const validPassword = await bcryptjs.compare(password, validUser.password);

  if (!validPassword) {
    return next(errorHandler(400, "Wrong password"));
  }
    try{
        await User.findByIdAndDelete(validUser._id);
        await UserInfo.findByIdAndDelete(userinfo._id);
        
        res.status(200).json("User has been deleted");  


    }catch (error){
        next(error)
    }   


}


export const userInfo = async (req, res, next) =>{
    try{
        const user = await UserInfo.findOne({ userid: req.params.id });
        console.log(user);
        res.status(200).json(user);
    }catch (error){
        next(error)
    }
}
















export const updatePassword = async (req, res, next) => {
    const { id, oldpassword, password } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }

        const validPassword = await bcryptjs.compare(oldpassword, user.password);
        if (!validPassword) {
            return next(errorHandler(400, "Wrong password"));
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const updatedUser = await User.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
        
        res.status(200).json({ success: true, message: "Password updated successfully"});
    } catch (error) {
        return next(errorHandler(404, "Somthig is Worng"));
    }
};






// career 


export const career = async (req, res, next) => {
    const { name, email, countryCode,number,experience,interested} = req.body;  
    try {
        const exsitUser = await CareerSuport.findOne({ email: email });
        if (exsitUser) {
            return next(errorHandler(400, "User already exist"));
        }

        const newCareer = new CareerSuport({
            name,
            email,
            countryCode,
            number,
            experience,
            interested,
        });
        await newCareer.save();
        res.status(201).json({ success: true, massage: "Request is Send" });       

    }catch(error){
        next(error)
    }



}

// contact

export const contact = async (req, res, next) => {
    const { name, email, message} = req.body;  
    try {
        const exsitUser = await Contact.findOne({ email: email });
        if (exsitUser) {
            return next(errorHandler(400, "User already exist"));
        }   


        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();
        res.status(201).json({ success: true, massage: "Request is Send" });    


    }catch(error){  
        next(error)
    }
} 

export const sendcourses = async (req, res, next) => {
    const id = req.params.id;  
    try {
        const user = await UserInfo.findOne({ userid: id }); // No need for req.params.id here

        const courseIds = user.courses; // Assuming user.courses contains course IDs

        // Find all courses whose IDs are in the courseIds array
        const courses = await CourseStructure.find({ _id: { $in: courseIds } });

        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

export const friendProfile = async (req, res, next) => {
    const id = req.params.id; 
    console.log("this is id", id);
    try {
        const friend = await User.findById(req.params.id);
        const { password: hashedPassword, ...rest } = friend._doc;
       
        res.status(200).json({success: true, data: rest});


    } catch (error) {
        next(error);
    }
}

export const friendProfileinfo = async (req, res, next) => {
    const id = req.params.id;  
    try {
        const friendinfo = await UserInfo.findOne({ userid: id });
        res.status(200).json({success: true, data: friendinfo});
    } catch (error) {
        next(error);
    }
}

export const sendCommend = async (req, res, next) => {
    const id = req.params.id;

    try {
        const commend = await Feedback.find({ profileid: id });
        res.status(200).json({success: true, data:commend });

    } catch (error) {
        next(error);
    }
}
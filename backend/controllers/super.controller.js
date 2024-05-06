import TeacherJoin from "../models/teacherJoin.model.js"
import Category from '../models/categoryUpload.model.js';
import Teacher from "../models/teacher.model.js";
import User from "../models/user.model.js";
import Payment from "../models/payment.model.js";





//for teachers request in super admin start

export const teacherRequest = async (req, res, next) => {
    try {

        const data = await TeacherJoin.find();
        console.log(Array.isArray(data));

        res.status(200).json({ success: true, data: data });
    } catch (error) {

        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const teacherDelete = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await TeacherJoin.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const acceptTeacherRequest = async (req, res, next) => {
    try {
        const id = req.params.id
        const teacher = await TeacherJoin.findById(id);
        // console.log(teacher);
        const email = teacher.email;





        const currentUser = await User.findOne({email});
        const userInfo = await User.findByIdAndUpdate(
            currentUser._id,
            {
                $set: {
                    role: "teacher"
                }
            },
            { new: true }
            );
            console.log("true");







        
        if (!teacher) {
            return res.status(404).json({ success: false, error: "Teacher not found" });
        }

        
        const newTeacher = new Teacher({
            fullname: teacher.fullname,
            email: teacher.email,
            phone: teacher.phone,
            organization: teacher.organization,
            idProof: teacher.idProof,
            resume: teacher.resume,
            video: teacher.video
        });

        await newTeacher.save();

        
        await TeacherJoin.findByIdAndDelete(id);

        res.status(200).json({ success: true, data: newTeacher });
    } catch (error) {
        console.error("Error accepting teacher request:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

//for teachers request in super admin end






//for categories in super admin start

export const categoryUploads = async (req, res, next) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, error: "Title is required" });
        }

        const existingCategory = await Category.findOne({ title });

        if (existingCategory) {
            return res.status(400).json({ success: false, error: "Category already exists" });
        }

        const newCategory = new Category({ title });
        await newCategory.save();

        res.status(201).json({ success: true, message: "Category uploaded successfully" });
    } catch (error) {
        console.error("Error uploading category:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const getCategoryData = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const categoryDelete = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ success: false, error: 'Category not found' });
        }

        res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};


//for categories in super admin end





//for teachers details in super admin start

export const showAllAcceptedTeachers = async (req, res, next)=>{
    try {

        const data = await Teacher.find();
        console.log(Array.isArray(data));

        res.status(200).json({ success: true, data: data });
    } catch (error) {

        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}



export const deleteAcceptedTecher = async (req, res, next)=>{
    try {
        const id = req.params.id;
        const teacher = await Teacher.findById(id);
        const email = teacher.email;





        const currentUser = await User.findOne({email});
        const userInfo = await User.findByIdAndUpdate(
            currentUser._id,
            {
                $set: {
                    role: "user"
                }
            },
            { new: true }
            );
            console.log("true");

        const data = await Teacher.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

//for teachers details in super admin end




// for all users details start
export const getUsersDetails = async (req, res, next) => {
    try {
        const users = await User.find({ role: "user" });
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching users data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}





export const bannedUser = async (req, res, next) => {
    try {
        
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        
        user.banned = true;
        await user.save();
        const currentUser = await User.findById(userId);

        res.status(200).json(currentUser);
    } catch (error) {
        console.error("Error banning user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}






export const UnBannedUser = async (req, res, next) => {
    try {
        
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        
        user.banned = false;
        await user.save();
        const currentUser = await User.findById(userId);

        res.status(200).json(currentUser);
    } catch (error) {
        console.error("Error banning user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

// for all users details end





//for enrolled students start
export const getEnrolledStudentsDetails = async (req, res, next) => {
    try {
        const users = await Payment.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching enrolled students data:", error);
        res.status(500).json({ success: false, error: "Error fetching enrolled students data" });
    }
}






export const clearPayment = async (req, res, next) => {
    try {
        
        const { userId } = req.params;
        const user = await Payment.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        
        user.paid = true;
        await user.save();
        const currentUser = await Payment.findById(userId);

        res.status(200).json(currentUser);
    } catch (error) {
        console.error("Error banning user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}






export const notClearPayment = async (req, res, next) => {
    try {
        
        const { userId } = req.params;
        const user = await Payment.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        
        user.paid = false;
        await user.save();
        const currentUser = await Payment.findById(userId);

        res.status(200).json(currentUser);
    } catch (error) {
        console.error("Error banning user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

//for enrolled students end
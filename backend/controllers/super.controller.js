import TeacherJoin from "../models/teacherJoin.model.js"
import Category from '../models/categoryUpload.model.js';





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
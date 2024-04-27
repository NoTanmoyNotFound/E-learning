import Category from "../models/categoryUpload.model";

//for course title-bar in courses page start

export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

//for course title-bar in courses page end
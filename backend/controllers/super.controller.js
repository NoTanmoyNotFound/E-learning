import TeacherJoin from "../models/teacherJoin.model.js"





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
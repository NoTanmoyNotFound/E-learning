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

export default teacherRequest;
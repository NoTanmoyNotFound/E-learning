import express from "express";
import { teacherRequest, teacherDelete, categoryUploads, getCategoryData, categoryDelete, acceptTeacherRequest, showAllAcceptedTeachers, deleteAcceptedTecher } from "../controllers/super.controller.js";
const router = express.Router();

// teacherRequest

router.get("/teacherRequest", teacherRequest);
router.delete("/teacherDelete/:id", teacherDelete);
router.put("/acceptTeacherRequest/:id", acceptTeacherRequest);



// category
router.post("/categoryUploads", categoryUploads);
router.get("/getCategoryData", getCategoryData);
router.delete("/categoryDelete/:id", categoryDelete);



//teachers
router.get("/showAllAcceptedTeachers",showAllAcceptedTeachers);
router.delete("/deleteAcceptedTecher/:id",deleteAcceptedTecher);

export default router;
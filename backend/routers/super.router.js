import express from "express";
import { teacherRequest, teacherDelete, categoryUploads, getCategoryData, categoryDelete } from "../controllers/super.controller.js";
const router = express.Router();

// teacherRequest

router.get("/teacherRequest", teacherRequest);
router.delete("/teacherDelete/:id", teacherDelete);



// category
router.post("/categoryUploads", categoryUploads);
router.get("/getCategoryData", getCategoryData);
router.delete("/categoryDelete/:id", categoryDelete);



export default router;
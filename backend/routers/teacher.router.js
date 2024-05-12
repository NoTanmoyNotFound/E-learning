import express from "express";
import { teacherask, getcourse,singleCourse } from "../controllers/teacher.controller.js";


const router = express.Router();

router.post("/teacherReq", teacherask )
router.get("/getcourse/:id", getcourse )
router.get("/singleCourse/:id", singleCourse )



export default router;
import express from 'express'
import { createCourseController, getAllCoursesController, getCourseByIdController, updateCourse } from '../controllers/createCourseController.js';
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();

router.post("/course",createCourseController)
router.get("/allcourses",getAllCoursesController)
router.get('/singleCourse/:id', getCourseByIdController)
router.post("/updateCourse/:id",  updateCourse)

export default router;
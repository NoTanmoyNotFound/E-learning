import express from 'express'
import { createCourseController, getAllCoursesController, getCourseByIdController } from '../controllers/createCourseController.js';

const router = express.Router();

router.post("/course",createCourseController)
router.get("/allcourses",getAllCoursesController)
router.get('/singleCourse/:id',getCourseByIdController)

export default router;
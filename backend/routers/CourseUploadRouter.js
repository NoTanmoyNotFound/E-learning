import express from 'express'
import { createCourseController } from '../controllers/createCourseController.js';

const router = express.Router();

router.post("/course",createCourseController)

export default router;
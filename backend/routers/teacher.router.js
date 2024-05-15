import express from "express";
import { teacherask, getcourse, singleCourse, deleteUploadedCourse, teacherPayment,getcoursePayment, teacherProfile } from "../controllers/teacher.controller.js";


const router = express.Router();

router.post("/teacherReq", teacherask)
router.get("/getcourse/:id", getcourse)
router.get("/singleCourse/:id", singleCourse)
router.delete("/deleteUploadedCourse/:id", deleteUploadedCourse)
router.post("/paymentDetails", teacherPayment)
router.get("/allcoursePayment/:id", getcoursePayment)
router.get("/teacherProfile/:id", teacherProfile)



export default router;
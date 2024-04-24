import express from "express";
import { teacherRequest, teacherDelete } from "../controllers/super.controller.js";
const router = express.Router();

teacherRequest

router.get("/teacherRequest", teacherRequest);
router.delete("/teacherDelete/:id", teacherDelete);


export default router
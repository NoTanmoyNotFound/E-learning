import express from "express";
import { teacherask } from "../controllers/teacher.controller.js";


const router = express.Router();

router.post("/teacherReq", teacherask )



export default router;
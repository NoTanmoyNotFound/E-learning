import express from "express";
import { teacherRequest } from "../controllers/super.controller.js";
const router = express.Router();

teacherRequest

router.get("/teacherRequest", teacherRequest);


export default router
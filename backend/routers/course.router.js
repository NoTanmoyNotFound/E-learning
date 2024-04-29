import express from "express";
import { getCategories } from "../controllers/course.controller.js";
const router = express.Router();

// courses

router.get("/getCategories", getCategories);

export default router;

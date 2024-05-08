import express from "express";
import {career, contact, updatePassword, updateUser, updateUserInfo, userInfo, sendcourses} from "../controllers/user.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();

router.post("/update/:id", varifyToken , updateUser )
router.post("/updateInfo", varifyToken , updateUserInfo )
router.post("/updatePass", varifyToken , updatePassword)
router.get("/updateInfo/:id", varifyToken , userInfo)
router.post("/careersupport", varifyToken , career)
router.post("/contact", varifyToken , contact)
router.get("/sendcourses/:id", sendcourses)




export default router;
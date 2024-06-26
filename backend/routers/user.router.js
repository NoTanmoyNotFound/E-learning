import express from "express";
import {career, contact, updatePassword, updateUser, updateUserInfo, userInfo, sendcourses, deleteUser,friendProfile, friendProfileinfo, sendCommend} from "../controllers/user.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();

router.post("/update/:id" , updateUser )
router.post("/updateInfo", varifyToken , updateUserInfo )
router.post("/updatePass", varifyToken , updatePassword)
router.get("/updateInfo/:id", varifyToken , userInfo)
router.post("/careersupport", varifyToken , career)
router.post("/contact", varifyToken , contact)
router.get("/sendcourses/:id", sendcourses)
router.delete("/deleteProfile", deleteUser)
router.get("/friendProfile/:id", friendProfile)
router.get("/friendProfileinfo/:id", friendProfileinfo)
router.get("/getcomments/:id", sendCommend)





export default router;
import express from "express";
import {updatePassword, updateUser, updateUserInfo, userInfo} from "../controllers/user.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();

router.post("/update/:id", varifyToken , updateUser )
router.post("/updateInfo", varifyToken , updateUserInfo )
router.post("/updatePass", varifyToken , updatePassword)
router.get("/updateInfo/:id", varifyToken , userInfo)




export default router;
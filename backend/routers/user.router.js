import express from "express";
import {updateUser, updateUserInfo} from "../controllers/user.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();

router.post("/update/:id", varifyToken , updateUser )
router.post("/updateInfo", varifyToken , updateUserInfo )




export default router;
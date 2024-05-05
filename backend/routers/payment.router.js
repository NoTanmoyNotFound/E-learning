import express from "express";
import {payment , validate} from "../controllers/payment.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();




router.post("/payment", varifyToken , payment )
router.post("/validate", validate  )




export default router;
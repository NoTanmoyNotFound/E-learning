import express from "express";
import {payment } from "../controllers/payment.controller.js";
import { varifyToken } from "../ulte/varifyToken.js";
const router = express.Router();




router.post("/payment", varifyToken , payment )




export default router;
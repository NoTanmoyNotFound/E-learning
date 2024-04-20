import express from "express";
import { signup, signin, google, signout, forgotPassword, chackOtp } from "../controllers/auth.controller.js";


const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin)
router.post("/google", google)
router.get("/signout", signout)
router.post("/forgotPassword", forgotPassword)
router.post("/chackOtp", chackOtp)



export default router;
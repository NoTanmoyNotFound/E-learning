import express from "express";
import {
    postLikes,
    postDisLikes,
    getLikesDisLikes,
} from "../controllers/likesDislikes.controller.js";

const router = express.Router();

// post Likes
router.post("/postLikes", postLikes);

// post Dislikes
router.post("/postDisLikes", postDisLikes);

// get Likes And Dislikes
router.get("/getLikesDisLikes", getLikesDisLikes);

export default router;

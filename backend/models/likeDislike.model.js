// models/contact.js
import mongoose from "mongoose";

const likeDislikeSchema = new mongoose.Schema({
    courseID: {
        type: String,
    },
    likes: [{
        type: String,
    }],
    dislikes: [{
        type: String,
    }],

});

const likeDislikes = mongoose.model("likeDislikes", likeDislikeSchema);

export default likeDislikes;

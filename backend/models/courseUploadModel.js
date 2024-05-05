import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("CourseStructure", courseSchema);

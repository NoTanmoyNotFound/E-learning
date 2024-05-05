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
    previewVideoUrl: {
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
    authorEmail:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true

    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    discountPercentage:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default:4,
    },
    examUrl: {
        type: String,
       
    },
    duration: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("CourseStructure", courseSchema);

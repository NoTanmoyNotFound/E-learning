import mongoose from "mongoose";
import User from "./user.model.js";

const userInfoSchema = new mongoose.Schema({
    userid: {
        type: String,
        ref: 'User'
    },
    collage: {
        type: String,
        default: 'none'
    },
    bio: {
        type: String,
        default: 'none'

    },
    birth: {
        type: String,
        default: 'none'

    },
    country: {
        type: String,
        default: 'none'

    },
    phone: {
        type: String,
        default: 'none'

    },
    gender: {
        type: String,
        default: 'none'

    },
    language: {
        type: String,
        default: 'none'

    },
    twiter: {
        type: String,
        default: 'none'

    },
    instagram: {
        type: String,
        default: 'none'

    },
    facebook: {
        type: String,
        default: 'none'

    },
    linkedin: {
        type: String,
        default: 'none'

    },
    github: {
        type: String,
        default: 'none'

    },
    courses: [],
}, { timestamps: true });

const UserInfo = mongoose.model('UserInfo', userInfoSchema);
export default UserInfo;
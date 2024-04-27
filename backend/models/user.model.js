import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        default : 'user'
    },
    password: {
        type : String,
        required : true,
        
    },
    profilePicture : {
        type : String,
        default : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
    }



}, {timestamps : true});

const User = mongoose.model('User', userSchema);

export default User;

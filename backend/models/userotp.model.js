import  mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    otp : {
        type : String,
        required : true
    }
}, {timestamps : true});

const UserOtp = mongoose.model('UserOtp', otpSchema);   

export default UserOtp;
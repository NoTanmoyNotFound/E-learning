import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    fullname: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true,
    },
    organization : {
        type : String,
        
    },
    idProof : {
        type : String,
        required : true,
        
    },
    resume : {
        type : String,
        required : true,
        default : 'none'
    },
    video : {
        type : String,
        required : true,
        default : 'none'
    }


}, {timestamps : true});

const Teacher = mongoose.model('Teacher', teacherSchema);   

export default Teacher;

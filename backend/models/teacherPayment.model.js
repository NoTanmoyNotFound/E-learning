import mongoose from "mongoose";

const teacherPaymentSchema = new mongoose.Schema({
    teacher_id: {
        type : "string",
        required : true
    },
    bank_holder_name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    ph_number : {
        type : String,
        required : true
    },
    acc_number : {
        type : String,  
        required : true
    },
    branch_name : {
        type : String,  
        required : true
    },
    ifce : {
        type : String,  
        required : true
    },
    upi : {
        type : String,  
        required : true
    }

}, {timestamps : true});

const TeacherPayment = mongoose.model( 'TeacherPayment', teacherPaymentSchema);

export default TeacherPayment;
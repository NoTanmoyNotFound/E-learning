import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    studentname : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    coursename : {
        type : String,
        required : true
    },
    teacherName : {
        type : String,
       
    },
    teacherEmail : {
        type : String,
    },
    paid : {
        type : Boolean,
        default : false
    }

}, {timestamps : true});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;


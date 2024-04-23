import mongoose from "mongoose";


const careerSuportSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    countryCode : {
        type : String,
        required : true
    },
    number : {
        type : String,
        required : true,
    },
    experience : {
        type : String,
        required : true
        
    },
    interested : {
        type : String,
        required : true

    }


}, {timestamps : true});


const CareerSuport = mongoose.model('CareerSuport', careerSuportSchema);

export default CareerSuport
const mongoose = require('mongoose');


//DB conn import
require('../db/conn');

const courseUploadShema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    teachername: {
        type: String,
        required: true
    },
    teacheremail: {
        type: String,
        required: true
    }
})



//model creation on DB ------------->
const CourseUpload = mongoose.model('CourseUpload', courseUploadShema);
module.exports = CourseUpload;
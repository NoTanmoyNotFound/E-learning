const mongoose = require('mongoose');


//DB conn import
require('../db/conn');

const courseTitleShema=new mongoose.Schema({

    courseTitle:{
        type: String,
        required: true
    }
})



//model creation on DB ------------->
const titleUpload = mongoose.model('titleUpload', courseTitleShema);
module.exports = titleUpload;
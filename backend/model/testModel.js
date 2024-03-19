const mongoose = require('mongoose');


//DB conn import
require('../db/conn');

const testModelSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})



//model creation on DB ------------->
const testModel = mongoose.model('testModel', testModelSchema);
module.exports = testModel;
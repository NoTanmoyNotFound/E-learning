const dotenv = require("dotenv");
const mongoose=require("mongoose");
const express=require("express");

const app = express();

//require DB from dotenv.config file ----------->
dotenv.config({ path: './config.env' });

//DB connectiom import conn file -------------->
const db = require('./db/conn');

//middleware for take data in json format --------->
app.use(express.json());

// import model ----------------------------------->
const courseUpload = require('./model/courseUpload');

//import auth (we link the router file to make our route easy----->)
app.use(require('./router/auth'));







app.listen(8000, () => {
    console.log(`server is running on 8000 port`);
});

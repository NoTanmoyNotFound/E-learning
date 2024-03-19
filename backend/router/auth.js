const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const nodemailer = require("nodemailer");


//DB connection import conn file --------------->
require('../db/conn');


// import models ------------------------------->
const CourseUpload = require('../model/courseUpload');
const titleUpload = require('../model/titleUpload');
const testModel = require('../model/testModel');





//dummy backend routing for checking -------------------------------->
router.get('/', (req, res) => {
    res.send(`<h1>Hello home!</h1>`);
})
//dummy backend routing for checking -------------------------------->










//routing for Course Upload by teacher page(from)----------------------------------------------->
// router.post('/uploadd', (req, res) => {
//     try {
//         const { title, description, duration, teachername, teacheremail } = req.body;

//         if (!title || !description || !duration || !teachername || !teacheremail) {
//             return res.status(500).json({ error: "Please fill all fields" });
//         } else {
//             const newCourse = new CourseUpload({ title, description, duration, teachername, teacheremail });

//             newCourse.save().then(() => {
//                 res.status(201).json({ message: 'Course Is Uploaded' });
//             }).catch((err) => {
//                 res.status(500).json({ error: "Not Uploaded", err });
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

//routing for Course Upload by teacher page(from)----------------------------------------------->
router.post('/testModel', (req, res) => {
    try {
        const { title, desc } = req.body;

        if (!title || !desc) {
            return res.status(500).json({ error: "Please fill all fields" });
        } else {
            const newCourse = new testModel({ title, desc });

            newCourse.save().then(() => {
                res.status(201).json({ message: 'Course Is Uploaded' });
            }).catch((err) => {
                res.status(500).json({ error: "Not Uploaded", err });
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});








//routing for Cource title Upload by Super Admin page(from)----------------------------------------------->
router.post('/SuperCourseDash', (req, res) => {

    try {

        // object destructuring using ES6 
        const { courseTitle } = req.body;


        // validation form & data entry
        if (!courseTitle) {
            return res.status(500).json({ error: "Please fill all fields" });
        }

        titleUpload.findOne({ courseTitle: courseTitle }).then((courseExist) => {
            if (courseExist) {
                return res.status(422).json({ error: "Course is alredy exist!" });
            }
            else {
                const newTitle = new titleUpload({ courseTitle });

                newTitle.save().then(() => {
                    res.status(201).json({ message: 'Title Is Uploaded' });
                }).catch((err) => {
                    res.status(500).json({ error: "Title Is not Uploaded", err });
                })
            }
        }).catch((err) => {
            res.status(500).json({ error: "Not registered", err });
        })



    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})



//routing for Course title getting in menubar------------------------------------------------------------->
router.get("/titles", async (req, res) => {
    try {
        const titles = await titleUpload.find({}, 'courseTitle'); // Fetching only the courseTitle field
        res.json({ titles });
    } catch (error) {
        console.error('Error fetching course titles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})



//routing for no. of Courses getting in Course Card Superadmin page ----------------------------------------
router.get('/countCourses', async (req, res) => {
    try {
        const count = await titleUpload.countDocuments(); // Assuming you want to count all courses
        res.json({ count });
    } catch (error) {
        console.error('Error fetching course count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});












//Routing for fetching all cource details from DB for cards
router.get('/getCourseDetails/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const courseDetails = await CourseUpload.findOne({ title }); // Assuming 'title' is a unique field
        res.json({ details: courseDetails });
    } catch (error) {
        console.error('Error fetching course details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

































module.exports = router;
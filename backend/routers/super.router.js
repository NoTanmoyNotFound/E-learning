import express from "express";
import {
    teacherRequest,
    teacherDelete,
    categoryUploads,
    getCategoryData,
    categoryDelete,
    acceptTeacherRequest,
    showAllAcceptedTeachers,
    deleteAcceptedTecher,
    getUsersDetails,
    bannedUser,
    UnBannedUser,
    getEnrolledStudentsDetails,
    clearPayment,
    notClearPayment,
    getContactUsDetails,
    deleteContactUsData,
    getMentorshipDetails,
    deleteMentorshipData
} from "../controllers/super.controller.js";
const router = express.Router();

// teacherRequest

router.get("/teacherRequest", teacherRequest);
router.delete("/teacherDelete/:id", teacherDelete);
router.post("/acceptTeacherRequest/:id", acceptTeacherRequest);



// category
router.post("/categoryUploads", categoryUploads);
router.get("/getCategoryData", getCategoryData);
router.delete("/categoryDelete/:id", categoryDelete);



//teachers
router.get("/showAllAcceptedTeachers", showAllAcceptedTeachers);
router.delete("/deleteAcceptedTecher/:id", deleteAcceptedTecher);


//users
router.get("/getUsersDetails", getUsersDetails);
router.post('/bannedUser/:userId', bannedUser);
router.post('/UnBannedUser/:userId', UnBannedUser);


//enrolled students
router.get("/getEnrolledStudentsDetails", getEnrolledStudentsDetails);
router.post('/clearPayment/:userId', clearPayment);
router.post('/notClearPayment/:userId', notClearPayment);


// support/contac us
router.get("/getContactUsDetails", getContactUsDetails);
router.delete("/deleteContactUsData/:id", deleteContactUsData);


// mentorship data
router.get("/getMentorshipDetails", getMentorshipDetails);
router.delete("/deleteMentorshipData/:id", deleteMentorshipData);

export default router;
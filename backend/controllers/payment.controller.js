import { errorHandler } from "../ulte/error.js";
import dotenv from 'dotenv';
import crypto from "crypto";
import axios from "axios";
import fetch from 'node-fetch';
import Razorpay from 'razorpay';
import Payment from "../models/payment.model.js";
dotenv.config();
import UserInfo from "../models/userinfo.model.js";
import CourseStructure from '../models/courseUploadModel.js';

const salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
const merchant_id = process.env.MARCHENT_ID;

// export const payment = async (req, res, next) => {
//     try {
//         const data = {
//             merchantId: "PGTESTPAYUAT",
//             merchantTransactionId: "MT7850590068188104",
//             merchantUserId: "MUID123",
//             amount: 10000,
//             redirectUrl: "https://webhook.site/redirect-url",
//             redirectMode: "POST",
//             callbackUrl: "https://webhook.site/callback-url",
//             mobileNumber: "9999999999",
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         }


//         const paylode = JSON.stringify(data);
//         const payloadMain = Buffer.from(paylode).toString('base64');
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const prod_url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
//         console.log(payloadMain);
//         const options = {
//             method: 'POST',
//             url: ` https://api.phonepe.com/apis/hermes/pg/v1/pay`,
//             headers: {
//                 'accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//             },
//             data:{
//                 request : 'eyJtZXJjaGFudElkIjoiUEdURVNUUEFZVUFUIiwibWVyY2hhbnRUcmFuc2FjdGlvbklkIjoiTVQ3ODUwNTkwMDY4MTg4MTA0IiwibWVyY2hhbnRVc2VySWQiOiJNVUlEMTIzIiwiYW1vdW50IjoxMDAwMCwicmVkaXJlY3RVcmwiOiJodHRwczovL3dlYmhvb2suc2l0ZS9yZWRpcmVjdC11cmwiLCJyZWRpcmVjdE1vZGUiOiJQT1NUIiwiY2FsbGJhY2tVcmwiOiJodHRwczovL3dlYmhvb2suc2l0ZS9jYWxsYmFjay11cmwiLCJtb2JpbGVOdW1iZXIiOiI5OTk5OTk5OTk5IiwicGF5bWVudEluc3RydW1lbnQiOnsidHlwZSI6IlBBWV9QQUdFIn19'
//             }
//         };


//         axios.request(options).then((response) => {
//             console.log(response.data);

//         }).catch((error) => {
//             console.error(error);
//         });



//         // await fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Accept': 'application/json',
//         //         'Content-Type': 'application/json',
//         //         'X-VERIFY': '9c4b3a5bfd918dcf2dc6b6f0e26926b5fdb555a49ad66c3787c7f9fb5dc11466###1'
//         //     },
//         //     body: JSON.stringify({
//         //         request: "eyJtZXJjaGFudElkIjoiUEdURVNUUEFZVUFUIiwibWVyY2hhbnRUcmFuc2FjdGlvbklkIjoiTVQ3ODUwNTkwMDY4MTg4MTA0IiwibWVyY2hhbnRVc2VySWQiOiJNVUlEMTIzIiwiYW1vdW50IjoxMDAwMCwicmVkaXJlY3RVcmwiOiJodHRwczovL3dlYmhvb2suc2l0ZS9yZWRpcmVjdC11cmwiLCJyZWRpcmVjdE1vZGUiOiJQT1NUIiwiY2FsbGJhY2tVcmwiOiJodHRwczovL3dlYmhvb2suc2l0ZS9jYWxsYmFjay11cmwiLCJtb2JpbGVOdW1iZXIiOiI5OTk5OTk5OTk5IiwicGF5bWVudEluc3RydW1lbnQiOnsidHlwZSI6IlBBWV9QQUdFIn19"
//         //     })
//         // })
//         //     .then(response => {
//         //         if (!response.ok) {
//         //             throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
//         //         }
//         //         return response.json();
//         //     })
//         //     .then(data => {
//         //         console.log(data);
//         //     })
//         //     .catch(error => {
//         //         console.error('Error:', error);
//         //     });






//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         })
//     }

// }

// export const status = async (req, res, next) => {

//     const merchantTransactionId = req.query.id
//     const merchantId = merchant_id

//     const keyIndex = 1;
//     const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//     const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//     const checksum = sha256 + "###" + keyIndex;

//     const options = {
//         method: 'GET',
//         url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//         headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//             'X-VERIFY': checksum,
//             'X-MERCHANT-ID': `${merchantId}`
//         }
//     };

//     // CHECK PAYMENT TATUS
//     axios.request(options).then(async (response) => {
//         if (response.data.success === true) {
//             const url = `http://localhost:3000/success`
//             return res.redirect(url)
//         } else {
//             const url = `http://localhost:3000/failure`
//             return res.redirect(url)
//         }
//     })
//         .catch((error) => {
//             console.error(error);
//         });

// }




export const payment = async (req, res, next) => {
    const key_id= process.env.RAZORPAY_KEY_ID
const key_secret= process.env.RAZORPAY_KEY_SECRET
console.log(key_id,key_secret);
    try {

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        if(!req.body){
            return res.status(400).send("Bad Request");

        }
        const options = req.body;

        const order = await razorpay.orders.create(options);

        if(!order){
            return res.status(400).send("Bad Request");
        }

        res.json(order);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


export const validate = async (req, res, next) => {

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature,uaerName,userEmail,price,courseId,userId,teacherName, teacherEmail} = req.body
    console.log(userEmail, uaerName, courseId, price);
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    const currentUser = await UserInfo.findOne({ userid: userId });

    if (currentUser) {
        currentUser.courses.push(courseId);

        await currentUser.save();

        

        const course = await CourseStructure.findOne({ _id: courseId });
        if (course) {
            console.log(course);
        }

        const payment = new Payment({ studentname: uaerName, email: userEmail, amount: price, coursename: course.name, teacherName: teacherName, teacherEmail: teacherEmail, });

        await payment.save();
        

        
    }else{
        res.status(400).json({msg: " add course error"});
    }
    const newInfo = await UserInfo.findOne({ _id: currentUser._id});

    res.status(200).json(newInfo);

}


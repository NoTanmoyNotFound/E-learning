import { errorHandler } from "../ulte/error.js";
import dotenv from 'dotenv';
import crypto from "crypto";
import axios from "axios";
import fatch from "node-fetch";
dotenv.config();

const salt = process.env.JWT_SECRET;
const marchentId = process.env.MARCHENT_ID;

export const payment = async (req, res, next) => {
    try {
        let marchentTransactionId = req.body.transactionId;
        const data = {
            merchantId: marchentId,
            merchantTransactionId: marchentTransactionId,
            name: req.body.name,
            amount: req.body.amount,
            redirectUrl: `https://localhost:3000/status?id=${marchentTransactionId}`,
            redirectMode: "POST",
            mobileNumber: req.body.number * 100,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };

        const paylode = JSON.stringify(data);
        const paylodeMain = Buffer.from(paylode).toString('base64');
        const keyIndex = 1;
        const String = paylodeMain + 'pg/v1/pay' + salt;
        const sha256 = crypto.createHash('sha256').update(String).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const prod_url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
        const options = {
            method: 'post',
            url: prod_url,
            headers: {
                accept: 'text/plain',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                paylode: paylodeMain,
            }
        };
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

        // const response = await axios(options)
        // console.log(response);



    } catch (error) {
        next(error);
    }
};

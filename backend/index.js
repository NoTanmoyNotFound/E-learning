import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRouter from './routers/auth.router.js'
import userRouter from './routers/user.router.js'
import teacherRouter from './routers/teacher.router.js'
import cors from 'cors'



dotenv.config();

// Dtabase connection
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("Mongo DB Connected");
}).catch((err) =>{
    console.log(err);
})

// rest object
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the origin you want to allow, or use a function for dynamic origin determination
    credentials: true, // Allow cookies and other credentials to be sent
  };


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())





// listen
app.listen(8000, () =>{
    console.log("Server is running on port 8000");
})



// routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);   
app.use('/api/teacher', teacherRouter);





// error handler
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });


})
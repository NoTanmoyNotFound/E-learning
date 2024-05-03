import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import teacherRouter from "./routers/teacher.router.js";
import superRouter from "./routers/super.router.js";
import courseRouter from "./routers/course.router.js";
import feedbackRoute from "./routers/feedbackRoute.js";
import courseUploadRouter from "./routers/CourseUploadRouter.js"

import cors from "cors";
import bodyParser from "body-parser";
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({ credentials: true, origin: true, exposedHeaders: ["set-cookie"] })
);
app.use(express.json());
app.use(cookieParser());




dotenv.config();



// Dtabase connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// rest object

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin you want to allow, or use a function for dynamic origin determination
  credentials: true, // Allow cookies and other credentials to be sent
};


console.log();





// listen
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/super", superRouter);
app.use("/api/course", courseRouter);
app.use("/api/f", feedbackRoute);
app.use("/api/upload",courseUploadRouter)

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

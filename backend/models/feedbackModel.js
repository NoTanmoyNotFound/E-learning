// models/contact.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  courseID:{
    type:String,
    required:true
  },
  profileid:{
    type:String,
   
  },

  profilePicture:{
    type:String,
   
  },
  name:{
    type:String,
    required:true
  },
  description: {
    type: String,
    required: true,
  }
  
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

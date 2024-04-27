// models/contact.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  description: String,
  
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

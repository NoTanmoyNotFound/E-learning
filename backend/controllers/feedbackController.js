// feedbackController.js

import Feedback from "../models/feedbackModel.js";

// Controller to create a new feedback
export const createFeedback = async (req, res) => {
  try {
    const { name, description } = req.body;
    const feedback = new Feedback({ name, description });
    const savedFeedback = await feedback.save();
    res.status(201).json({
      savedFeedback
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

// Controller to get all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// Controller to delete feedback by ID
export const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

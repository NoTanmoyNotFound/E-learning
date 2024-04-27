// contact.js

import express from 'express';
import { createFeedback, getAllFeedback, deleteFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

// Route to create a new feedback
router.post('/feed', createFeedback);

// Route to get all feedback
router.get('/feeds', getAllFeedback);

// Route to delete feedback by ID
router.delete('/feed-delete/:id', deleteFeedback);

export default router;

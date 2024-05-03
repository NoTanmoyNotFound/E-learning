import CourseStructure from '../models/courseUploadModel.js';

// Other middleware and routes setup...

export const createCourseController = async (req, res) => {
  try {
    const { imageUrl, videoUrl, name, description, price, duration } = req.body;

    // Check if all required fields are provided
    if (!imageUrl || !videoUrl || !name || !description || !price || !duration) {
      res.status(400);
      throw new Error("All fields (Image URL, Video URL, Name, Description, Price, Duration) are required !!");
    }

    const course = new CourseStructure({
      imageUrl,
      videoUrl,
      name,
      description,
      price,
      duration
    });

    const savedCourse = await course.save();

    res.status(200).json({
      success: true,
      savedCourse
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

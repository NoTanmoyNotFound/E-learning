import CourseStructure from '../models/courseUploadModel.js';



export const createCourseController = async (req, res) => {
  try {
    const { imageUrl, videoUrl, name,author, description, price, duration } = req.body;


    if (!imageUrl || !videoUrl || !name || !description || !price || !duration) {
      res.status(400);
      throw new Error("All fields (Image URL, Video URL, Name, Description, Price, Duration) are required !!");
    }

    const course = new CourseStructure({
      imageUrl,
      videoUrl,
      name,
      author,
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



export const getAllCoursesController = async (req, res) => {
  try {

    const courses = await CourseStructure.find({});


    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Error retrieving courses',
      error: error.message,
    });
  }
};


export const getCourseByIdController = async (req, res) => {
  try {
    const { id } = req.params;


    const course = await CourseStructure.findById(id);


    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }


    res.status(200).json({
      success: true,
      course,
    });

  } catch (error) {
    console.error(error);


    res.status(500).json({
      success: false,
      message: 'Error retrieving course',
      error: error.message,
    });
  }
};
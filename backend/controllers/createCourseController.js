import CourseStructure from '../models/courseUploadModel.js';



export const createCourseController = async (req, res) => {
  try {
    const {
      imageUrl,
      videoUrl,
      previewVideoUrl,
      name,

      author,
      authorEmail,
      description,
      category,
      price,
      discount,
      discountPercentage,
      examUrl,
      duration,
    } = req.body;

    if (
      !imageUrl ||
      !videoUrl ||
      !previewVideoUrl ||
      !name ||

      !author ||
      !authorEmail ||
      !description ||
      !category ||
      !price ||
      !discount ||
      !examUrl ||
      !duration
    ) {
      res.status(400);
      throw new Error("All required fields must be filled.");
    }

    const course = new CourseStructure({
      imageUrl,
      videoUrl,
      previewVideoUrl,
      name,

      author,
      authorEmail,
      description,
      category,
      price,
      discount,
      discountPercentage,
      examUrl,
      duration,
    });

    const savedCourse = await course.save();

    res.status(200).json({
      success: true,
      savedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
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
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleCourseDetails.css';

const SingleCourseDetails = () => {
  const { courseId } = useParams(); // Get course ID from route parameters

  // Initialize course state with default values
  const [course, setCourse] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    discountedPrice: '',
    discount: '',
    rating: 0,
    learn: [], // Ensure initialized as empty array
    includes: [], // Ensure initialized as empty array
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]); // Ensure initialized as empty array

  // Initialize the form data state variable with default values
  const [formData, setFormData] = useState({
    courseID: courseId,
    userName: '',
    userFeedback: '',
  });

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/upload/singleCourse/${courseId}`);
        const data = await response.json();

        if (response.ok) {
          setCourse(data.course);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('An error occurred while fetching course details.');
      } finally {
        setLoading(false);
      }
    };

    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/f/getFeed');
        const data = await response.json();

        if (response.ok) {
          setFeedbacks(data.feedbacks || []); // Use fallback to empty array
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
      }
    };

    fetchCourseDetails();
    fetchFeedbacks();
  }, [courseId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      courseID: courseId,
      name: formData.userName,
      description: formData.userFeedback,
    };

    try {
      const response = await fetch('http://localhost:8000/api/f/feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        setFormData({
          courseID: courseId,
          userName: '',
          userFeedback: '',
        });
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isValidRating = (rating) => typeof rating === 'number' && rating >= 0 && rating <= 5;

  return (
    <div className="single-course-details">
      <button className="floating-btn">
        <Link to="/Allcourses">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
      </button>

      <div className="banner-course">
        <div className="banner-inner-course">
          <div className="left-single">
            <h1 className="primaryText">{course.name}</h1>
            <div className="desc-c">
              <p className="secondaryText">{course.description}</p>
            </div>
          </div>

          <div className="right-single">
            <div className="right-single-inner">
              {course.imageUrl && (
                <img className="img-course" src={course.imageUrl} alt={course.name} />
              )}
            </div>

            <div className="mid-single">
              <p className="mid-p">
                <span className="price-mid">{course.price}</span>
                <span>
                  <s>{course.discountedPrice}</s>
                </span>
              </p>

              <p className="mid-star">
                {isValidRating(course.rating)
                  ? [...Array(course.rating)].map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))
                  : 'Invalid rating'}
                {isValidRating(course.rating) &&
                  [...Array(5 - course.rating)].map((_, index) => (
                    <span key={index}>&#9734;</span>
                  ))}
              </p>

              {course.discount && <span className="discount">{course.discount}</span>}
            </div>

            <div className="mid-single-button">
              <button className="courses-buy w-100 h-12 rounded-xl">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="single-course-main">
        <div className="single-inner">
          <h1 className="primaryText">What you'll learn</h1>
          <div className="ticks-single">
            {Array.isArray(course.learn) && course.learn.map((item, index) => (
              <div key={index} className="ul">
                <div className="li">
                  <li>{item}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="single-course-main2">
        <div className="single-inner2">
          <h1 className="primaryText">This course includes:</h1>
          <div className="ticks-single2">
            {Array.isArray(course.includes) && course.includes.map((item, index) => (
              <div key={index} className="ul2">
                <div className="li2">
                  <li>{item}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cmmmm">
        <h1 className="primaryText">Comments/Feedbacks</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
          className="user-name-textarea ml-12 h-10 rounded"
        />
        <textarea
          name="userFeedback"
          placeholder="Share your feedback..."
          value={formData.userFeedback}
          onChange={handleChange}
          className="user-feedback-textarea"
          style={{ width: '30%' }}
        />
        <button
          type="submit"
          className="feed_back hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Feedback
        </button>
      </form>

      <div className="comments-single">
        {Array.isArray(feedbacks) && feedbacks.map((item, index) => (
          <div key={index} className="single-comment">
            <div className="comm-inner">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="profile"
              />
              <p>{item.name}</p>
            </div>
            <div className="quote">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourseDetails;

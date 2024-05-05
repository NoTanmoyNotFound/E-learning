import React, { useState, useEffect } from "react";
import "./SingleCourseDetails.css";
import { useParams, Link } from "react-router-dom";
import { color } from "framer-motion";
import Payment from "../../../page/Payment";
import { useSelector } from "react-redux";

const SingleCourseDetails = () => {
  const { courseId } = useParams(); // Get course ID from route parameters
  const [showModal, setShowModal] = React.useState(false);
  const [isCoursePurchased, setIsCoursePurchased] = useState(null);
  const { currentUserInfo } = useSelector((state) => state.local);
  console.log(currentUserInfo);
  // const isCoursePurchased = currentUserInfo.courses.includes(courseId);
  // Initialize course state with default values
  const [course, setCourse] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    author: "",
    authorEmail: "",
    discountedPrice: "",
    discount: "",
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
    userName: "",
    userFeedback: "",
  });

  useEffect(() => {
    const checkCoursePurchased = () => {
      setIsCoursePurchased(currentUserInfo.courses.includes(courseId));
    };

    checkCoursePurchased();
  }, [currentUserInfo, courseId]);























  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/upload/singleCourse/${courseId}`
        );
        const data = await response.json();

        if (response.ok) {
          setCourse(data.course);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("An error occurred while fetching course details.");
      } finally {
        setLoading(false);
      }
    };

    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/f/getFeed");
        const data = await response.json();

        if (response.ok) {
          setFeedbacks(data.feedbacks || []); // Use fallback to empty array
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };

    fetchCourseDetails();
    // fetchFeedbacks();
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
      const response = await fetch("http://localhost:8000/api/f/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
        setFormData({
          courseID: courseId,
          userName: "",
          userFeedback: "",
        });
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  if (loading) {
    return <div className="primaryText">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isValidRating = (rating) =>
    typeof rating === "number" && rating >= 0 && rating <= 5;

  return (
    <div className="s-body-d mt-5">
      <button className="floating-btn">
        <a href="/Allcourses">
          <i class="fa-solid fa-angle-left"></i>
        </a>
      </button>
      {/* <Header /> */}
      <div className="banner-course">
        <div className="banner-inner-course">
          <div className="left_single">
            <h1 className="primaryText primaryTextt">{course.name}</h1>
            <div className="desc-c">
              <p className="secondaryTextt">{course.description}</p>
            </div>
            <div className="testimonials_rating">
              <div className="no_of_students">
                <p>{course.noOfStudents} - students</p>
              </div>
              <br />
              <div className="ratings_course">
                {isValidRating(course.rating)
                  ? [...Array(course.rating)].map((_, index) => (
                      <span key={index}>&#9733;</span>
                    ))
                  : "Invalid rating"}
                {isValidRating(course.rating) &&
                  [...Array(5 - course.rating)].map((_, index) => (
                    <span key={index}>&#9734;</span>
                  ))}
              </div>
              <div className="bottom_single">
                <p className="secondaryText">
                  Created by <u>{course.author}</u>
                </p>
                <p className="secondaryText">
                  Teacher's Email <u>{course.authorEmail}</u>
                </p>
                <p className="secondaryText">Duration {course.duration} h</p>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="right_single" style={{ height: "fit-content" }}>
            <div className="right_single_inner">
              {course.imageUrl && (
                <img
                  className="img-course"
                  src={course.imageUrl}
                  alt={course.name}
                />
              )}
            </div>
            <div className="mid_single">
              <p className="mid-p">
                <span className="price-mid primaryText">₹ {course.price}</span>
                <span>
                  <s className="orangeText">₹ 4000</s>
                </span>
              </p>
              <p className="mid-star">
                {isValidRating(course.rating)
                  ? [...Array(course.rating)].map((_, index) => (
                      <span key={index}>&#9733;</span>
                    ))
                  : "Invalid rating"}
                {isValidRating(course.rating) &&
                  [...Array(5 - course.rating)].map((_, index) => (
                    <span key={index}>&#9734;</span>
                  ))}
              </p>
              <span className="discount">{course.discount}</span>
            </div>
            <div>
              <div className="preview_main">
                <div
                  className="preview_inner "
                  onClick={() => setShowModal(true)}
                  type="button"
                >
                  <i className="fa-solid fa-video modal-btn-11"></i>
                </div>
              </div>
              {/* <button
                className="bg-[#FF4B2B] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Open regular modal
              </button> */}
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative  w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex bg-[#33fadcc6] items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <div>
                            <video src={course.videoUrl} controls autoPlay />
                          </div>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className=" bg-[#ff2929] rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            {/* <div className="preview_main">
              <div className="preview_inner">
                <i className="fa-solid fa-video modal-btn-11"></i>
              </div>
            </div> */}
            <div className="mid_single_button">
             {isCoursePurchased ? <button className="w-100 button3"  > go to course </button> : <Payment courseId={courseId} price={course.price} teacherEmail={course.authorEmail} teacherName={course.author} /> } 
            </div>
          </div>
        </div>
      </div>
      <div className="single_course_main">
        <div className="single_inner">
          <h1 className="primaryText">What you'll learn</h1>
          <div className="ticks_single">
            <div className="ul">
              <div className="li">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe eos culpa impedit dolore quasi.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" single_course_main2">
        <div className=" single_inner2">
          <h1 className="primaryText">Why Choose Us?</h1>
          <div className="ticks_single ticks_single2">
            <div className="ul2">
              <div className="li2">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam vel dolorem necessitatibus recusandae et sequi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam vel dolorem necessitatibus recusandae et sequi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam vel dolorem necessitatibus recusandae et sequi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam vel dolorem necessitatibus recusandae et sequi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam vel dolorem necessitatibus recusandae et sequi.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cmmmm">
        <h1 className="primaryText">Comments/Feedbacks</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center ">
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
          className="user-name-textarea ml-12 h-10 rounded sm:mb-0 sm:mr-3 "
        />
        <textarea
          name="userFeedback"
          placeholder="Share your feedback..."
          value={formData.userFeedback}
          onChange={handleChange}
          className="user-feedback-textarea ml-3 h-10 rounded sm:mb-0 sm:mr-3"
          style={{ width: "30%" }}
        ></textarea>
        <button
          type="submit"
          className="feed_back hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1"
        >
          Submit Feedback
        </button>
      </form>

      <div className="comments_single">
        {Array.isArray(feedbacks) && feedbacks.map((item, index) => (
          <div key={index} className="single-comment">
            <div className="comm_inner">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
              <p>{item.name}</p>
            </div>
            <div className="quote">
              <p>
                <b></b> {item.description} <b></b>
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SingleCourseDetails;

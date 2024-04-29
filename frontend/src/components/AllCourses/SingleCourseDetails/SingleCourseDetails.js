import React, { useState, useEffect } from "react";
import "./SingleCourseDetails.css";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/Footer/Footer";
import { color } from "framer-motion";

const SingleCourseDetails = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch("http://localhost:8000/api/f/getFeed");
        const data = await response.json();
        // console.log(data);
        if (data.success === false) {
          console.log(data.message);
        } else {
          setFeedbacks(data);
        }
      } catch (error) {}
    }

    fetchUserInfo();
  }, []);
  console.log(feedbacks);

  // Sample JSON data
  const courseDetails = {
    title: "The Complete 2024 Web Development Bootcamp",
    description:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    instructor: "Saklin Mustak",
    instructorEmail: "saklin@123.gmail.com",
    lastUpdated: "3/2024",
    price: "₹499",
    discountedPrice: "₹3,099",
    discount: "84% off",
    noOfStudents: "12,222",
    rating: 4,
    comments: [
      {
        author: "Saklin Mustak",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus aut corporis ullam incidunt obcaecati cumque...",
      },

      // Add more comments here if needed
    ],
    learn: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
      "After the course you will be able to build ANY website you want.",
      "Work as a freelance web developer.",
      // Add more learn points here if needed
    ],
    includes: [
      "61 hours on-demand video",
      "7 coding exercises",
      "65 articles",
      // Add more items here if needed
    ],
  };

  // State variable to store user feedback
  const [formData, setFormData] = useState({
    courseID: "121021",
    userName: "",
    userFeedback: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler function to submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Prepare the data to send
      const dataToSend = {
        courseID: "121021",
        name: formData.userName,
        description: formData.userFeedback,
      };

      // Send POST request to the API endpoint
      const response = await fetch("http://localhost:8000/api/f/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      // Check if request was successful
      if (response.ok) {
        console.log("Feedback submitted successfully");
        // Clear the form data after successful submission
        setFormData({ userName: "", userFeedback: "" });
      } else {
        // Handle error cases
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
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
            <h1 className="primaryText">{courseDetails.title}</h1>
            <div className="desc-c">
              <p className="secondaryTextt">{courseDetails.description}</p>
            </div>
            <div className="testimonials_rating">
              <div className="no_of_students">
                <p>{courseDetails.noOfStudents} - students</p>
              </div>
              <br />
              <div className="ratings_course">
                {[...Array(courseDetails.rating)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                {[...Array(5 - courseDetails.rating)].map((_, index) => (
                  <span key={index}>&#9734;</span>
                ))}
              </div>
              <div className="bottom_single">
                <p className="secondaryText">
                  Created by <u>{courseDetails.instructor}</u>
                </p>
                <p className="secondaryText">
                  Teacher's Email <u>{courseDetails.instructorEmail}</u>
                </p>
                <p className="secondaryText">
                  Last updated {courseDetails.lastUpdated}
                </p>
                <br />
                <br />
                <p className="c-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quidem, <br /> rem nobis, molestias temporibus
                  consequatur tempora repellat illum cum voluptate <br />{" "}
                  suscipit tenetur animi doloribus aliquid perferendis iusto
                  iste pariatur. <br /> Aliquid exercitationem placeat
                  repudiandae recusandae minima possimus <br /> deleniti
                  obcaecati nihil nisi dolorum veritatis, <br /> nesciunt sequi
                  ex nostrum necessitatibus saepe consectetur architecto.
                </p>
              </div>
            </div>
          </div>

          <div className="right_single">
            <div className="right_single_inner">
              <img
                className="img_course"
                src="https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI"
                alt=""
              />
            </div>
            <div className="mid_single">
              <p className="mid-p">
                <span className="price-mid">{courseDetails.price}</span>
                <span>
                  <s>{courseDetails.discountedPrice}</s>
                </span>
              </p>
              <p className="mid-star">
                {[...Array(courseDetails.rating)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                {[...Array(5 - courseDetails.rating)].map((_, index) => (
                  <span key={index}>&#9734;</span>
                ))}
              </p>
              <span className="discount">{courseDetails.discount}</span>
            </div>
            <div className="mid_single_button">
              <button className="courses-buy w-100 h-12 rounded-xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="single_course_main">
        <div className="single_inner">
          <h1 className="primaryText">What you'll learn</h1>
          <div className="ticks_single">
            {courseDetails.learn.map((item, index) => (
              <div key={index} className="ul">
                <div className="li">
                  <li>{item}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" single_course_main2">
        <div className=" single_inner2">
          <h1 className="primaryText">This course includes:</h1>
          <div className="ticks_single ticks_single2">
            {courseDetails.includes.map((item, index) => (
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
        {feedbacks &&
          feedbacks.map((item, index) => (
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
      </div>

      <div className="foo">{/* <Footer /> */}</div>
    </div>
  );
};

export default SingleCourseDetails;

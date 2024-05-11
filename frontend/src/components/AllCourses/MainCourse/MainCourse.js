import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Maincourse.css";
import { useSelector } from "react-redux";
import Banned from "../../Error/Banned";

const MainCourse = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ comment: "" });

  const { currentUserInfo } = useSelector((state) => state.local);
  const { currentUser} = useSelector((state) => state.user);


  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/f/getFeed?courseID=${courseId}`
      );
      const data = await response.json();
      console.log("Fetched comments data:", data); // Debugging log

      if (response.ok) {
        setComments(data); // Store comments
      } else {
        setError(data.message); // Handle server-side errors
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
      setError("An error occurred while fetching comments."); // Handle network errors
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `/api/upload/singleCourse/${courseId}`
        );
        const data = await response.json();

        if (response.ok) {
          setCourseData(data.course);
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError("An error occurred while fetching the course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
    fetchComments();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.comment.trim()) {
      console.warn("Name and comment must not be empty.");
      return;
    }

    const payload = {
      name: currentUser.name,
      profilePicture: currentUser.profilePicture,
      description: formData.comment,
      courseID: courseId,
    };

    try {
      const response = await fetch("http://localhost:8000/api/f/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Comment added successfully.");
        setFormData({ name: "", comment: "" });
        fetchComments();
      } else {
        setError("Failed to add comment.");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
      setError("An error occurred while adding the comment.");
    }
  };

  if (loading) {
    return <div>Loading course data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="maincourse">
      <button className="floating-btn">
        <a href="/Allcourses">
          <i className="fa-solid fa-angle-left"></i>
        </a>
      </button>

      <div className="relative overflow-hidden video-section bg-black bg-opacity-25">
        {currentUserInfo && currentUserInfo.courses.includes(courseId) && courseData?.videoUrl ? (
          <>
            <video
              className="w-30% m-12 rounded-lg ml-44 drop-shadow-xl"
              controls
              src={courseData.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
            <p className="ml-44">Course Uploaded by {courseData.author}</p>
            <h3 className="text-lg font-semibold ml-44">{courseData.name}</h3>
            <p className="text-sm ml-44 mb-6">{courseData.description}</p>
            <h3 className="text-lg font-semibold ml-44">Test Yourself in Free !! After Completion of Course</h3>
            <button className="ml-44 MaincB"><Link to="https://docs.google.com/forms/d/14LDtIOPTMJBPKhPKT13dZJ0yBJmG1lW4NewI7hZw1eI/edit">Free Test </Link></button>
          </>
        ) : (
          <Banned/>
        )}
      </div>

      {/* Comment Submission Form */}
      <div className="mt-4 ml-44">
        <form
          className="flex flex-col gap-2 items-start"
          onSubmit={handleSubmit}
        >
          <div className="w-[60%]">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              className="border border-gray-800 p-2"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mb-20 border border-black p-1 shadow-xl rounded-lg"
          >
            Add Comment
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="comments-section ml-44">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment">
            <div className=" flex gap-2">
            <div className="comment-img rounded-full">
            <img src={comment.profilePicture} alt="this" className="rounded-full" width={30} height={30} />
            </div>
              <strong>{comment.name}</strong>
              </div>
              <p className=" pl-10 mb-3">{comment.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MainCourse;

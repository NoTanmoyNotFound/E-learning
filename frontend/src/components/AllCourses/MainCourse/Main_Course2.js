import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './Main_Course2.css'
import { useSelector } from "react-redux";
import Banned from "../../Error/Banned";
import teacher from "./teacher.jpg"
import { useNavigate } from "react-router-dom";
const Main_Course2 = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({ comment: "" });
    const [commentCount , setCommentCount] = useState(0)
    const [teacherProf, setTeacher] = useState(null);
 
    const { currentUserInfo } = useSelector((state) => state.local);
    const { currentUser } = useSelector((state) => state.user);

    const fetchComments = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/f/getFeed/${courseId}`
            );
            const data = await response.json();
            console.log("Fetched comments data:", data); // Debugging log

            if (response.ok) {
                setComments(data); // Store comments
                setCommentCount(data.length)
                
            } else {
                setError(data.message); // Handle server-side errors
            }
        } catch (err) {
            console.error("Error fetching comments:", err);
            setError("An error occurred while fetching comments."); // Handle network errors
        }
    };


    const fetchTeacher = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/teacher/teacherProfile/${courseId}`
            );
            const data = await response.json();
            console.log("Fetched comments data:", data); // Debugging log

            if (response.ok) {
                setTeacher(data.data);
                console.log(teacherProf); // Store comments
                
            } else {
                // setError(data.message); // Handle server-side errors
            }
        } catch (err) {
            console.error("Error fetching pitcher:", err);
        }
    };




















    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`/api/upload/singleCourse/${courseId}`);
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
        fetchTeacher();
        
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
            profileid: currentUser._id,
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
        <section className="Main_Course2">
            <div className="main_inner2">

                {/* course view start */}
                {currentUserInfo &&
                    currentUserInfo.courses.includes(courseId) &&
                    courseData?.videoUrl ? (
                    <div className="course_main2">

                        <div className="video_section_main">
                            <video src={courseData.videoUrl} controls >Your browser does not support the video tag.</video>
                        </div>

                        <div className="main_heading_courseName">
                            <hr />
                            <h2 className='primaryText head_course'>{courseData.name}</h2>
                            <p className="whiteText desc_course">{courseData.description}</p>
                            <hr />
                        </div>

                        <div className="main_teacher_name_and_profile">
                            <div className="pppp">
                            
                                <img src={teacherProf ? teacherProf.profilePicture : teacher} alt="" width={70} />
                                <div className="teacher_name2_email">
                                    <div className="t_inner">
                                        <p className='t_name2'>{courseData.author}</p>
                                        <p className='t_email2'>{courseData.authorEmail}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="duratio2">
                                <p className='d22'>Course Duration</p>
                                <p className='d33'><i className="fa-regular fa-clock"></i>&nbsp;{courseData.duration} h</p>
                            </div>

                            <div className="likes2">
                                <div className="likes2_inner">
                                    <button className="btnLinkes2"><i className="fa-regular fa-thumbs-up"></i></button>
                                    <span className="likeCount2">2.3K</span>
                                    <button className="btnLinkes23"><i className="fa-regular fa-thumbs-down"></i></button>
                                    <span className="likeCount2">566</span>
                                </div>
                            </div>

                            <div className="test_main2">
                                <Link to="https://docs.google.com/forms/d/14LDtIOPTMJBPKhPKT13dZJ0yBJmG1lW4NewI7hZw1eI/edit" className='butTest'>EXAM{""}</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Banned />
                )}
                {/* course view end */}


                {/* comments main start */}
                <div className="comment_main2">
                    <div className="comment_inner2">
                        <div className="cmm_head2" style={{ marginBottom: '5px' }}>
                            <p className='primaryText' style={{ fontSize: '1.6rem' }}><i className="fa-regular fa-comments"></i>&nbsp; Comments:</p>
                            <p className='whiteText' style={{ color: 'white', fontWeight: '700', fontSize: '1.4rem', textShadow: '0 2px 5px rgba(0, 0, 0, 0.653)' }}>&nbsp;{commentCount}</p>
                        </div>


                        <div className="main_all_comm">
                            <div className="main_comm_inner">

                                <div className='overFlow-set'>
                                    {/* single comment start */}
                                    {comments.length === 0 ? (
                                        <p>No comments yet.</p>
                                    ) : (
                                        comments.map((comment, index) => (
                                            <div key={index} className="bg-2">
                                                <div className="each_comm2" onClick={() => navigate(`/friendProfile/${comment.profileid}`)}>
                                                    <img src={comment.profilePicture} alt="" />
                                                    <p className='each_name'>{comment.name}</p>
                                                </div>
                                                <div className="desc_review">
                                                    <p>{comment.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                    {/* single comment end */}
                                </div>

                                <form className="comment_send_main" onSubmit={handleSubmit}>
                                    <textarea className='textArea' name="comment" id="comment" placeholder='Give a comment' value={formData.comment}
                                        onChange={handleChange}></textarea>
                                    <button className='button3 button333'>Send Comment</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                {/* comments main end */}



                {/* floating btn start */}
                <button className="floating-btn">
                    <a href="/Allcourses">
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                </button>
                {/* floating btn end */}

            </div>
        </section>
    )
}

export default Main_Course2

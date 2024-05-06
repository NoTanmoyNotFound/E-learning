import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import coursesData from './courses.json';
import { useSelector } from "react-redux";

const Cards = () => {
    const [error, setError] = useState('');
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUserInfo } = useSelector((state) => state.local);
    


    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : text;
    };

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/upload/allcourses');
                const responseData = await response.json();

                if (response.ok) {
                    setCourses(responseData.courses);
                    setError('');
                } else {
                    setError(responseData.message || 'Failed to fetch courses');
                }
            } catch (err) {
                console.error('Error fetching course data:', err);
                setError('An error occurred while fetching courses. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();
    }, []);

    if (loading) {
        return <p>Loading courses...</p>;
    }


    return (
        <div className="main-container">
            {courses.map((course) => (
                <div key={course._id} className="b-card course-card">
                
                    <div className="course_img">
                        <img className="course_card_img" src={course.imageUrl} alt={course.name} />
                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>{course.price}</span>
                    </p>
                    <div className="bottom_card">
                        <p className="primaryText">{course.name}</p>
                        <p className="secondaryText text-dark">{course.author}</p>
                        <p className="secondaryText">{truncateText(course.description, 10)} </p>

                    </div>
                    {currentUserInfo && currentUserInfo.courses.includes(course._id) ?(
                        <a href={`/course-details/${course._id}`} className="w-100">
                        <button className="button3 disabled">Enrolled</button>
                        </a>
                    ):(

                        <a href={`/course-details/${course._id}`} className="w-100">
                
                        <button className="button3">
                            
                                Enroll Now
                           
                        </button>
                        </a>
                    )}
             
                </div>
            ))}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Cards;

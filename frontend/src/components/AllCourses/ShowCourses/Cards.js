import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
    const [error, setError] = useState('');
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);


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
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                courses.map((course) => (
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
                            <p className="secondaryText">{course.author}</p>
                            <p className="secondaryText">
                                {truncateText(course.description, 10)} 
                            </p>
                        </div>
                        <button className="button">
                            <Link to={`/course-details/${course._id}`} className="w-100">
                                Enroll Now
                            </Link>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cards;

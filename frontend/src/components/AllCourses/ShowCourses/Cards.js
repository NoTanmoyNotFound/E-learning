import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import coursesData from './courses.json';

const Cards = () => {
    const [error, setError] = useState('');
    const [courses, setCourses] = useState([]); // Define courses state
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch category data
        const fetchCategoryData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/course/getCategories');
                const responseData = await response.json();
                if (responseData.success) {
                    setCategories(responseData.data);
                    setError('');
                } else {
                    setError(responseData.error);
                }
            } catch (error) {
                console.error('Error fetching category data:', error);
                setError('An error occurred. Please try again later.');
            }
        };

        fetchCategoryData(); // Call fetchCategoryData when component mounts
    }, []);

    useEffect(() => {
        setCourses(coursesData);
    }, []);

    return (
        <div className="main-container">
            {courses.map((course) => (
                <div key={course.id} className="b-card course-card">
                    <div className="course_img">
                        <img className="course_card_img" src={course.image} alt="#" />
                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>{course.price}</span>
                    </p>
                    <div className="bottom_card">
                        <p className="primaryText">{course.title}</p>
                        <p className="secondaryText text-dark">{course.author}</p>
                        <p className="secondaryText">{course.description}</p>

                    </div>
                    <button className="button">
                        <Link to={`/course-details/${course.id}`} className="w-100">
                            Enroll Now
                        </Link>
                    </button>
                </div>
            ))}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Cards;

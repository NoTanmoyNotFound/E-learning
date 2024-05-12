import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
// import data from "./slider.json";
import { sliderSettings } from './common';
import "./Bestcourses.css"
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Bestcourses = () => {
    const navigate = useNavigate();
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
        <section className="b-wrapper mt-5">
            <div className="paddings innerWidth b-container">
                <div className="b-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Courses</span>
                </div>
            </div>

            {/* slider------------------------------------------ */}
            <Swiper {...sliderSettings}>
                {courses.map((course, i) => (
                    <SwiperSlide key={i}>
                        <div className="flexColStart b-card " onClick={() => navigate(`/course-details/${course._id}`)} >
                            <img src={course.imageUrl} alt="#"/>
                            <span className="secondaryText b-price">
                                <span style={{ color: 'orange' }}>Rs: </span>
                                <span>{course.price}</span>
                            </span>
                            <span className='primaryText'>{course.name}</span>
                            <span className='secondaryText'>{truncateText(course.description, 20)}</span>
                        </div>
                    </SwiperSlide>
                ))}

                {/* buttons slider 'Saklin'----------------------- */}
                <SliderButtons />
            </Swiper>
        </section>
    );
}

export default Bestcourses;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flexCenter b-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
}

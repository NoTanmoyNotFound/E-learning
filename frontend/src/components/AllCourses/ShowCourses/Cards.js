import React, { useState, useEffect } from 'react';
import "./Cards.css";
import '../MenuBar/MenuBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Cards = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [categories, setCategories] = useState([]);

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

    useEffect(() => {
        fetchCategoryData();
    }, []);


    return (
        <>
            {/* <div className="horizontal-menu-container">
                <div className="menu-scroll">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            className="menu-item"
                            to={`/courses/${category}`} // Assuming each category is a route
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </div> */}


            <div className='main-container'>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
                <div className="b-card course-card">
                    <div className="course_img">
                        <img className='course_card_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="#" />

                    </div>
                    <p className="secondaryText b-price">
                        <span style={{ color: 'orange' }}>Rs: </span>
                        <span>900</span>
                    </p>
                    <div className="bootom_card">
                        <p className='primaryText'>Python</p>
                        <p className='secondaryText'>Wow best course</p>
                    </div>
                    <button className='button'><Link to='/course-details' className='w-100'>Enroll Now</Link></button>
                </div>
            </div>

        </>
    );
};

export default Cards;

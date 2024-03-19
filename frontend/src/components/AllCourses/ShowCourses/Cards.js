<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import "./Cards.css";
import '../MenuBar/MenuBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Cards = () => {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        // Fetch titles when the component mounts
        fetch('/titles')
            .then(response => response.json())
            .then(data => setTitles(data.titles))
            .catch(error => console.error('Error fetching titles:', error));
    }, []); // The empty dependency array ensures this effect runs once when the component mounts


    return (
        <>
            <div className="horizontal-menu-container">
                <div className="menu-scroll">
                    {titles.map((title, index) => (
                        <Link
                            key={index}
                            className="menu-item"
                            to={`/courses/${title.courseTitle}`} // Extract 'courseTitle'
                        >
                            {title.courseTitle} {/* Render 'courseTitle' */}
                        </Link>
                    ))}
                </div>
            </div>


            <div className='main-container'></div>

        </>
    );
};

export default Cards;
=======
import React, { useState, useEffect } from 'react';
import "./Cards.css";
import '../MenuBar/MenuBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Cards = () => {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        // Fetch titles when the component mounts
        fetch('/titles')
            .then(response => response.json())
            .then(data => setTitles(data.titles))
            .catch(error => console.error('Error fetching titles:', error));
    }, []); // The empty dependency array ensures this effect runs once when the component mounts


    return (
        <>
            <div className="horizontal-menu-container">
                <div className="menu-scroll">
                    {titles.map((title, index) => (
                        <Link
                            key={index}
                            className="menu-item"
                            to={`/courses/${title.courseTitle}`} // Extract 'courseTitle'
                        >
                            {title.courseTitle} {/* Render 'courseTitle' */}
                        </Link>
                    ))}
                </div>
            </div>


            <div className='main-container'></div>

        </>
    );
};

export default Cards;
>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e

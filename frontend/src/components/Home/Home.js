import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Company from './CollabCompany/Company';
import Bestcourses from './BestCourses/Bestcourses';
import Mentorship from './CareerMentorship/Mentorship';
import Contact from './ContactUs/Contact';
import GetStarted from './GetStarted/GetStarted';
import Footer from './Footer/Footer';
import './Home.css';

const Home = () => {
    const [isToggle, setIsToggle] = useState(false);



    const toggleValue = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="App" >
            <div>
                <div className="white-gradient" />
                <Header onButtonClick={toggleValue} />
                <Body />
            </div>
            <Company />
            <Bestcourses />
            <Mentorship />
            <Contact />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Home;
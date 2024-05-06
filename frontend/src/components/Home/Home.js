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
import {useSelector,useDispatch} from 'react-redux'
import { userInfoStart, userInfoSuccess, userInfoFailure } from "../../redux/user/localSlice";

const Home = () => {
    const [isToggle, setIsToggle] = useState(false);
    const { currentUser } = useSelector((state) => state.user)
    console.log(currentUser);
   
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchUserInfo() {
            dispatch(userInfoStart());
            try {
                const response = await fetch(`/api/user/updateInfo/${currentUser._id}`);
                const data = await response.json();
                console.log(data);
                if (data.success === false) {
                    dispatch(userInfoFailure(data.message));
                } else {
                    dispatch(userInfoSuccess(data));
                }
            } catch (error) {
                dispatch(userInfoFailure(error.message));
            }
        }

        fetchUserInfo();
    }, []);



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
import React from 'react';
import Header from '../Home/Header/Header';
import Cards from './ShowCourses/Cards';
import Footer from "../Home/Footer/Footer"

const AllCourses = () => {
    return (
        <>
            <Header />
            <Cards />
            <hr width='100%'></hr>
            <Footer />
        </>
    )
}

export default AllCourses;

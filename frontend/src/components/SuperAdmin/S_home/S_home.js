import React, { useState, useEffect } from 'react';
import './S_home.css';
import '../SuperAdmin.css';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { PiStudentBold } from "react-icons/pi";

const S_home = () => {


    const [courseCount, setCourseCount] = useState(0);

    useEffect(() => {
        // Fetch the course count from the backend API (/countCourses)
        fetch('/countCourses')
            .then(response => response.json())
            .then(data => {
                setCourseCount(data.count); // Assuming my backend response has a property 'count' for the number of courses
            })
            .catch(error => {
                console.error('Error fetching course count:', error);
            });
    }, []);




    return (
        <main className='mainn-container'>
            <div className='mainn-title'>
                <h3 className='primaryText'>DASHBOARD</h3>
            </div>

            <div className='mainn-cardds'>
                <div className='cardd'>
                    <div className='cardd-inner'>
                        <h3>STUDENTS</h3>
                        <a href="#"><PiStudentBold className='cardd_icon' /></a>
                    </div>
                    {/* Dynamic count */}
                    <h1>300</h1>
                </div>
                <div className='cardd'>
                    <div className='cardd-inner'>
                        <h3>COURSES</h3>
                        <a href="/SuperCourseDash"><BsFillGrid3X3GapFill className='cardd_icon' /></a>
                    </div>

                    {/* Dynamic count */}
                    <h1>{courseCount}</h1>
                </div>
                <div className='cardd'>
                    <div className='cardd-inner'>
                        <h3>TEACHERS</h3>
                        <a href="/superTeachers"><BsPeopleFill className='cardd_icon' /></a>
                    </div>
                    {/* Dynamic count */}
                    <h1>33</h1>
                </div>
                <div className='cardd'>
                    <div className='cardd-inner'>
                        <h3>REQUESTS</h3>
                        <a href="#"><BsFillBellFill className='cardd_icon' /></a>
                    </div>
                    {/* Dynamic count */}
                    <h1>42</h1>
                </div>
            </div>

        </main>
    )
}

export default S_home;

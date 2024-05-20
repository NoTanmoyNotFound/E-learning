import React, { useState, useEffect } from 'react';
import './S_home.css';
import '../SuperAdmin.css';
import { Link } from 'react-router-dom';

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
        <main className='mainn-container smc'>
            <div className='mainn-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='mainn-cardds'>
                <div className='cardd'>
                    <Link to="/superadmin/users-details">
                        <div className='cardd-inner'>
                            <h3>All Users</h3>
                            <a href="#"><i class="fa-solid fa-users"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>300</h1> */}
                </div>
                <div className='cardd'>
                    <Link to="/superadmin/category-details">
                        <div className='cardd-inner'>
                            <h3>Categories</h3>
                            <a href="#"><i class="fa-solid fa-list"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>300</h1> */}
                </div>
                <div className='cardd'>
                    <Link to="/superadmin/students-details">
                        <div className='cardd-inner'>
                            <h3>STUDENTS</h3>
                            <a href="#"><i class="fa-solid fa-graduation-cap"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>300</h1> */}
                </div>
                <div className='cardd'>
                    <Link to="/superadmin/teachers-details">
                        <div className='cardd-inner'>
                            <h3>TEACHERS</h3>
                            <a href="#"><i class="fa-solid fa-person-chalkboard"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>300</h1> */}
                </div>
                <div className='cardd'>
                    <Link to="/superadmin/request">
                        <div className='cardd-inner'>
                            <h3>REQUESTS</h3>
                            <a href="#"><i class="fa-solid fa-bell"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>42</h1> */}
                </div>
                <div className='cardd'>
                    <Link to="/superadmin/users-supports">
                        <div className='cardd-inner'>
                            <h3>SUPPORT</h3>
                            <a href="#"><i class="fa-solid fa-headset"></i></a>
                        </div>
                    </Link>
                    {/* Dynamic count */}
                    {/* <h1>42</h1> */}
                </div>
            </div>

        </main>
    )
}

export default S_home;

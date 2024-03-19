import React, { useState } from 'react';
import S_header from '../../S_header/S_header';
import S_sidebar from '../../S_sidebar/S_sidebar';
import '../../S_home/S_home.css';
import './SuperCourseDash.css';
import '../../SuperAdmin.css';
import { MdLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const SuperCourseDash = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <S_header OpenSidebar={OpenSidebar} />
            <S_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            {/* home code  */}
            <main className='mainn-container'>
                <div className='mainn-title'>
                    <h3>CONTROLL COURSES</h3>
                </div>

                <div className='mainn-cardds'>
                    <div className='cardd'>
                        <div className='cardd-inner'>
                            <div className="pushable" style={{ border: "3px solid white", display: "flex", padding: ".5rem", borderRadius: "10px", background: "white", boxShadow: "0 0 10px black" }}>
                                <a href="/superCourseTitle" style={{ display: "flex", gap: "1.6rem" }}>
                                    <h3 className='front'>Upload Courses</h3>
                                    <PiStudentBold className='cardd_icon' />
                                </a>

                            </div>
                        </div>

                        <div className="descrip-course">
                            <span className='descc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam id architecto velit, deleniti dignissimos.</span>
                        </div>
                        {/* Dynamic count */}
                        <h1>300</h1>
                    </div>


                    <div className='cardd'>
                        <div className='cardd-inner'>
                            <div className="pushable" style={{ border: "3px solid white", display: "flex", padding: ".5rem", borderRadius: "10px", background: "white", boxShadow: "0 0 10px black" }}>
                                <a href="/superCourseTitle" style={{ display: "flex", gap: "1.6rem" }}>
                                    <h3 className='front'>Display Courses</h3>
                                    <MdLibraryBooks className='cardd_icon' />
                                </a>

                            </div>
                        </div>

                        <div className="descrip-course">
                            <span className='descc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam id architecto velit, deleniti dignissimos.</span>
                        </div>
                        {/* Dynamic count */}
                        <h1>300</h1>
                    </div>

                </div>

            </main>

        </div>
    )
}

export default SuperCourseDash;

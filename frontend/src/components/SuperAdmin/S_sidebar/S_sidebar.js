import React from 'react';
import './S_sidebar.css';
import { PiStudentBold } from "react-icons/pi";
import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

const S_sidebar = ({ openSidebarToggle, OpenSidebar, profilePic }) => {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className="profile">
                    <img src={profilePic} className="image" id="pfp" alt="Profile" />
                    <h3 className="name">Saklin Mustak</h3>
                    <p className="role">Super Admin</p>
                </div>
                <span id='closeIcon' className='iconn close_iconn' onClick={OpenSidebar} style={{marginTop:"-6rem", color:"black"}}><i className="fa-solid fa-angle-left"></i></span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/superadmin">
                        <BsGrid1X2Fill className='iconn' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/superStudents">
                        <PiStudentBold className='iconn' /> Students
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/SuperCourseDash">
                        <BsFillGrid3X3GapFill className='iconn' /> Courses
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/superTeachers">
                        <BsPeopleFill className='iconn' /> Teachers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='iconn' /> Requests
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='iconn' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='iconn' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default S_sidebar;

import React from 'react';
import './S_sidebar.css';
import { PiStudentBold } from "react-icons/pi";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { BsListCheck } from 'react-icons/bs';
import { FaHeadphonesAlt, FaUsers } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { MdAnalytics } from "react-icons/md";
import { useSelector } from "react-redux";

const S_sidebar = ({ openSidebarToggle, OpenSidebar, profilePic }) => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className="profile">
                    <img src={currentUser && currentUser.profilePicture} className="image" id="pfp" alt="Profile" />
                    <h3 className="name">{currentUser && currentUser.name}</h3>
                    <p className="role">Super Admin</p>
                </div>
                <span id='closeIcon' className='iconn close_iconn' onClick={OpenSidebar} style={{ marginTop: "-6rem", color: "black" }}><i className="fa-solid fa-angle-left"></i></span>
            </div>

            <ul className='sidebar-list'>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin">
                        <MdAnalytics className='iconn' /> Dashboard
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/users-details">
                        <FaUsers className='iconn' /> All Users
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/category-details">
                        <BiSolidCategory className='iconn' /> Categories
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/students-details">
                        <PiStudentBold className='iconn' /> Students
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/teachers-details">
                        <GiTeacher className='iconn' /> Teachers
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/request">
                        <BsListCheck className='iconn' /> Requests
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/users-supports">
                        <FaHeadphonesAlt className='iconn' /> Supports
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/mentorship-req">
                        <AiFillAudio className='iconn' /> Mentorship Req
                    </Link>
                </li>
                
            </ul>
        </aside>
    );
};

export default S_sidebar;

import React from 'react';
import '../../SuperAdmin/S_sidebar/S_sidebar.css';
import { PiStudentBold } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

const S_sidebar = ({ openSidebarToggle, OpenSidebar, profilePic }) => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className="profile">
                    <img src={currentUser.profilePicture} className="image" id="pfp" alt="Profile" />
                    <h3 className="name">{currentUser.name}</h3>
                    <p className="role">Student</p>
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
                        <FaBookBookmark  className='iconn' /> Courses
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/SuperCourseDash">
                        <FaChalkboardTeacher  className='iconn' /> Join as a Teacher
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/superTeachers">
                        <BsPeopleFill className='iconn' /> Teachers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/superadmin/request">
                        <RiLockPasswordLine className='iconn' /> Change Password
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <RiLockPasswordFill className='iconn' /> Reset Password
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='iconn' /> Settings
                    </a>
                </li>
                <li className='sidebar-list-item '>
                    <a href="">
                        <MdDelete  className='iconn text-[#f00]' /> <p className='text-[#f00]'>Delete Account</p>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default S_sidebar;

import React from 'react';
import './S_sidebar.css';
import { PiStudentBold } from "react-icons/pi";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
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
                        <BsGrid1X2Fill className='iconn' /> Dashboard
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/users-details">
                        <BsFillGrid3X3GapFill className='iconn' /> All Users
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/category-details">
                        <BsFillGrid3X3GapFill className='iconn' /> Categories
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/students-details">
                        <PiStudentBold className='iconn' /> Students
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/teachers-details">
                        <BsPeopleFill className='iconn' /> Teachers
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/superadmin/request">
                        <BsListCheck className='iconn' /> Requests
                    </Link>
                </li>
                
            </ul>
        </aside>
    );
};

export default S_sidebar;

import React from "react";
import "./TA_Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";

import { BsBookHalf } from "react-icons/bs";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import MyCourses from "../TA_MyCourses/MyCourses";
import { useDispatch, useSelector } from "react-redux";

const TA_Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <aside
      id="TAsidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="TAsidebar-title">
        <div className="TAprofile flex justify-center flex-col items-center">
          <img
            src={currentUser && currentUser.profilePicture}
            className="image items-center"
            id="pfp"
          />
          <h3 className="name">{currentUser && currentUser.name}</h3>
          <p className="role"> Admin Panel </p>
        </div>
        <span className="iconn close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="TAsidebar-list">
        <li className="TAsidebar-list-item">
          <Link to="/teacherDashbord">
            <BsGraphUp className="iconn" /> Analytics
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/teacherDashbord/TeacherCourse">
            <FaCloudUploadAlt className="iconn" />
            Upload Course
          </Link>
        </li>
        <li className='TAsidebar-list-item'>
          <Link to="/teacherDashbord/UpdateCourse">
            <FaBook className='iconn' /> All Course
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/teacherDashbord/TeacherPayment">
            <BsBookHalf className="iconn" />
            Payments
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/teacherDashbord/BankDetails">
            <BsBookHalf className="iconn" />
            Bank Details
          </Link>
        </li>
        <li className='TAsidebar-list-item'>
          <Link to="/ForgotPassword">
            <RiLockPasswordFill className='iconn' /> Change Pass***
          </Link>
        </li>

      </ul>
    </aside>
  );
};

export default TA_Sidebar;

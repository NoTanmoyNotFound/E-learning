import React from "react";
import "./TA_Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import {Link} from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";

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

const TA_Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="TAsidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="TAsidebar-title">
        <div className="TAprofile">
          <img src="s.png" className="image" id="pfp" />
          <h3 className="name">Saklin Mustak</h3>
          <p className="role"> Admin Panel </p>
        </div>
        <span className="iconn close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="TAsidebar-list">
        <li className="TAsidebar-list-item">
          <Link to="/TeacherAdminMain">
            <BsGraphUp className="iconn" /> Analytics
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/TeacherCourse">
            <BsBookHalf className="iconn" />
            All Courses
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/TeacherPayment">
            <BsBookHalf className="iconn" />
            Payments
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/TeacherFeedback">
            <BsBookHalf className="iconn" />
            Feedback
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default TA_Sidebar;

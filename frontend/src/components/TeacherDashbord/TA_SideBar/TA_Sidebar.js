import React from "react";
import "./TA_Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";

const TA_Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <aside
      id="TAsidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="TAsidebar-title">
        <div className="TAprofile">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/readx-ee41a.appspot.com/o/videos%2F1714765424774_self%20image.jpg?alt=media&token=7ff08ce1-3c60-47f3-bdf0-35a6efe56fbe"
            className="image"
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
          <Link to="/techerDashbord">
            <BsGraphUp className="iconn" /> Analytics
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/techerDashbord/TeacherCourse">
            <BsBookHalf className="iconn" />
            All Courses
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/techerDashbord/TeacherPayment">
            <BsBookHalf className="iconn" />
            Payments
          </Link>
        </li>
        <li className="TAsidebar-list-item">
          <Link to="/techerDashbord/TeacherFeedback">
            <BsBookHalf className="iconn" />
            Feedback
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default TA_Sidebar;

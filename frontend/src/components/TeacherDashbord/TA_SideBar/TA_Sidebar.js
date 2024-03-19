import React from "react";
import "./TA_Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
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
          <a href="/TeacherAdminMain">
            <BsGraphUp className="iconn" /> Analytics
          </a>
        </li>

        <li className="TAsidebar-list-item">
          <a href="/superTeachers">
            <FaUserCircle className="iconn" />
            Profile
          </a>
        </li>

        <li className="TAsidebar-list-item ">
          <a href="/superStudents">
            <PiStudentBold className="iconn " /> Students
          </a>
        </li>

        <li className="TAsidebar-list-item">
          <a href="/superCourseTitle">
            <BsBookHalf className="iconn" />
            My Courses
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default TA_Sidebar;

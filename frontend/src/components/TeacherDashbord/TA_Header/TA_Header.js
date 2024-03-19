import React from "react";
import "./TA_Header.css";
import "../TeacherAdminMain.css";

import { IoHome } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

import { BsPersonCircle, BsJustify } from "react-icons/bs";

const TA_Header = ({ OpenSidebar }) => {
  return (
    <header className="TAheader bg-slate-200">
      <div className="TAmennu-icon">
        <BsJustify className="iconn" onClick={OpenSidebar} />
      </div>

      {/* <div className="header-left flex" style={{justifyContent:'space-evenly', alignItems: "center", width:"30%"}}>
                <a href="/">Home</a>
                <a href="allCourses" style={{marginLeft:'1rem'}}>Courses</a>
                <a href="logout" style={{marginLeft:'1rem'}}>Log Out</a>
            </div> */}

      <div className="TAheader-right flex">
        <a href="/">
          <IoHome className="iconn" />
        </a>
        <a href="allCourses">
          <IoBookSharp className="iconn" />
        </a>
        <a href="logout">
          <HiOutlineLogout className="iconn" />
        </a>
      </div>
    </header>
  );
};

export default TA_Header;

import React from "react";
import "./TeacherAdminMain.css";
import { useState } from "react";

import TA_Sidebar from "./TA_SideBar/TA_Sidebar";
import TA_Header from "./TA_Header/TA_Header";
import TA_Analytics from "./TA_Analytics/TA_Analytics";
import MyCourses from "./TA_MyCourses/MyCourses";

const TeacherAdminMain = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container TAmain">
        <TA_Header OpenSidebar={OpenSidebar} />
        <TA_Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <TA_Analytics />
      
      </div>
    </>
  );
};

export default TeacherAdminMain;

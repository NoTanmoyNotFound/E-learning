import React from "react";
import "./TeacherAdminMain.css";
import { useState, useEffect } from "react";

import TA_Sidebar from "./TA_SideBar/TA_Sidebar";
import TA_Header from "./TA_Header/TA_Header";
import TA_Analytics from "./TA_Analytics/TA_Analytics";
import MyCourses from "./TA_MyCourses/MyCourses";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userInfoStart, userInfoSuccess, userInfoFailure } from "../../redux/user/localSlice";

const TeacherAdminMain = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  
  useEffect(() => {
    async function fetchUserInfo() {
        dispatch(userInfoStart());
        try {
            const response = await fetch(`/api/user/updateInfo/${currentUser._id}`);
            const data = await response.json();
            console.log(data);
            if (data.success === false) {
                dispatch(userInfoFailure(data.message));
            } else {
                dispatch(userInfoSuccess(data));
            }
        } catch (error) {
            dispatch(userInfoFailure(error.message));
        }
    }

    fetchUserInfo();
}, []);

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
        {/* <TA_Analytics /> */}
        <Outlet />
      </div>
    </>
  );
};

export default TeacherAdminMain;

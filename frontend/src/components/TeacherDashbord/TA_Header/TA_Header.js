import React from "react";
import "./TA_Header.css";
import "../TeacherAdminMain.css";

import { IoHome } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { BsPersonCircle, BsJustify } from "react-icons/bs";
import { signOut } from '../../../redux/user/userSlice';
import { InfosignOut } from '../../../redux/user/localSlice'


const TA_Header = ({ OpenSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:8000/api/auth/signout');
      dispatch(signOut());
      dispatch(InfosignOut());
      <Navigate to="/" />
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="TAheader bg-slate-200">
      <div className="TAmennu-icon">
        <BsJustify className="iconn" onClick={OpenSidebar} />
      </div>

      <div className="TAheader-right flex">
        <a href="/">
          <IoHome className="iconn text-2xl" />
        </a>
        <a href="/allCourses">
          <IoBookSharp className="iconn text-2xl" />
        </a>
        <Link onClick={handleSignOut}><HiOutlineLogout className='iconn text-2xl' /></Link>
      </div>
    </header>
  );
};

export default TA_Header;

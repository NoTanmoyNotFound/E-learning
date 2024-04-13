import React from 'react';
import './S_header.css';
import '../SuperAdmin.css';

import { IoHome } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";

import { useNavigate, Link, Navigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/user/userSlice';




const S_header = ({ OpenSidebar }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = async () => {
        try {
          await fetch('http://localhost:8000/api/auth/signout');
          dispatch(signOut());
          <Navigate to="/"/>
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <header className='header'>
            <div className='mennu-icon'>
                <BsJustify className='iconn' onClick={OpenSidebar} />
            </div>
            

            

            <div className='header-right flex' >

            {/* <div className='mennu-icon'>
                <AiOutlineClose className='iconn' onClick={OpenSidebar} />
            </div> */}

                <a href="/"><IoHome className='iconn' /></a>
                <a href="allCourses"><IoBookSharp className='iconn' /></a>
                <Link onClick={handleSignOut}><HiOutlineLogout className='iconn' /></Link>
                <Link><BsPersonCircle onClick={handleSignOut} className='iconn' /></Link>
                
            </div>
        </header>
    )
}

export default S_header;

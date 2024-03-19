<<<<<<< HEAD
import React from 'react';
import './S_header.css';
import '../SuperAdmin.css';

import { IoHome } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";

const S_header = ({ OpenSidebar }) => {
    return (
        <header className='header'>
            <div className='mennu-icon'>
                <BsJustify className='iconn' onClick={OpenSidebar} style={{fontSize:"1.7rem", cursor:"pointer"}}/>
            </div>
            

            

            <div className='header-right flex' style={{gap:"10px"}}>

            {/* <div className='mennu-icon'>
                <AiOutlineClose className='iconn' onClick={OpenSidebar} />
            </div> */}

                <a href="/"><IoHome className='iconn' style={{fontSize:"1.7rem"}} /></a>
                <a href="allCourses"><IoBookSharp className='iconn' style={{fontSize:"1.7rem"}}/></a>
                <a href="logout"><HiOutlineLogout className='iconn' style={{fontSize:"1.7rem"}}/></a>
            </div>
        </header>
    )
}

export default S_header;
=======
import React from 'react';
import './S_header.css';
import '../SuperAdmin.css';

import { IoHome } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";

const S_header = ({ OpenSidebar }) => {
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
                <a href="logout"><HiOutlineLogout className='iconn' /></a>
            </div>
        </header>
    )
}

export default S_header;
>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e

import React from 'react';
import './SuperAdmin.css';
import { useState } from 'react';
import S_header from './S_header/S_header';
import S_home from './S_home/S_home';
import S_sidebar from './S_sidebar/S_sidebar';
import Footer from '../Home/Footer/Footer';

const SuperMain = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <>
            <div className='grid-container'>
                <S_header OpenSidebar={OpenSidebar} />
                <S_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <S_home />
            </div>
            <Footer/>
        </>
    )
}

export default SuperMain;

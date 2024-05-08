import React from 'react'
import { useState } from 'react';
import S_header from '../../SuperAdmin/S_header/S_header';
import P_sidebar from './P_sidebar'

import { useDispatch, useSelector } from 'react-redux';
// import './ProfileView.css'
import './ProfileCourse.css'
import beer from '../ProfileView/assets/beer.jpg'



function ProfileCourse() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    const { currentUser } = useSelector((state) => state.user);

  
    return (
    <div className='grid-container'>
            <S_header OpenSidebar={OpenSidebar} />
            <P_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} profilePic={currentUser.profilePic} />
            <div className='StudentCourse'>
              <div className="StudentCards">
                <div className="courseimg">
                <img src={beer} alt="" />
                </div>
                <div className="CourseDesc overflow-hidden">
                  <div className="CourseName text-3xl font-bold   ">Python</div>
                  <div className="TeacherName pl-10 mt-2"> ~Tanmoy Das</div>
                  <div className="Description overflow-scroll h-32 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo velit natus ipsam excepturi cupiditate pariatur est officiis consequuntur error! Libero facere deserunt error ipsam laboriosam quas nostrum iure quidem iste, dicta, corrupti recusandae, iusto repudiandae ducimus tempora aliquam aliquid doloribus non eaque perferendis. Ab exercitationem dolorum veniam hic temporibus nam unde dolor voluptatibus, ad aut velit quibusdam mollitia iure quo laudantium recusandae minus non. Corrupti velit eaque numquam delectus, excepturi reiciendis! Exercitationem doloremque repellendus enim esse praesentium sapiente vitae corporis id nulla quos eaque recusandae doloribus, quod at voluptates dolorum, reprehenderit consequatur placeat. Dolores sed perferendis aliquam ducimus aut?</div>
                </div>
              </div>
      

            </div>
    </div>
  )
}

export default ProfileCourse

import React from 'react'
import { useState, useEffect } from 'react';
import S_header from '../../SuperAdmin/S_header/S_header';
import P_sidebar from './P_sidebar'

import { useDispatch, useSelector } from 'react-redux';
// import './ProfileView.css'
import './ProfileCourse.css'
import beer from '../ProfileView/assets/beer.jpg'
import { useNavigate } from "react-router-dom"




function ProfileCourse() {
  const navigate = useNavigate();
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [data, setData] = useState([]);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    const { currentUser } = useSelector((state) => state.user);

    const fatchsutdentcourse = async () => {
      try {
          const response = await fetch(`/api/user/sendcourses/${currentUser._id}`);
          const data = await response.json();
          console.log(data);
          setData(data);
      } catch (error) {
          console.error('Error fetching enrolled students data:', error);
      } finally {
         
      }
  };

  useEffect(() => {
    fatchsutdentcourse();
  }, []);






















  
    return (
    <div className='grid-container'>
            <S_header OpenSidebar={OpenSidebar} />
            <P_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} profilePic={currentUser.profilePic} />
            <div className='StudentCourse' >

            {data &&data.map((item) => (
              
          
              <div className="StudentCards mb-3 " key={item._id} onClick={() => navigate(`/course-details/${item._id}`)}>
                <div className="courseimg pl-3 pr-3">
                <img src={item.imageUrl} alt="" />
                </div>
                <div className="CourseDesc overflow-hidden">
                  <div className="CourseName text-3xl font-bold">{item.name}</div>
                  <div className="TeacherName pl-10 mt-2"> ~{item.author}</div>
                  <div className="Description overflow-scroll h-32 pt-3">{item.description}</div>
                </div>
              </div>
            ))}


        
      

            </div>
    </div>
  )
}

export default ProfileCourse

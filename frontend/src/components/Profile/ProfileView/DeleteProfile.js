import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import S_header from '../../SuperAdmin/S_header/S_header';
import P_sidebar from './P_sidebar'
import { useDispatch, useSelector } from 'react-redux';
import {DeleteUserInfo} from '../../../redux/user/localSlice'
import { deleteUserSuccess } from "../../../redux/user/userSlice";

function DeleteProfile() {
    const navigate = useNavigate();
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({email: currentUser.email, password: ''});
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    const [error, setError] = useState(null);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
const handelSubmit = async(e) => {
    e.preventDefault();

    const res = fetch(`/api/user/deleteProfile`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(formData)
    })

        dispatch(deleteUserSuccess());
        dispatch(DeleteUserInfo())
        navigate('/signin')
        if (res.ok === false) {
            setError(res.message);
        }
   

   
   

    
}













  return (
    <div className='grid-container'>
    <S_header OpenSidebar={OpenSidebar} />
    <P_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} profilePic={currentUser.profilePic} />
    <div className=' lg:w-[900px] w-full p-10 mx-auto' >
    <form onSubmit={handelSubmit}>
        <div className='flex flex-col mb-3'>
            <label className='text-lg font-bold'>Email</label>
            <input type="email" name="email" value={currentUser.email} required disabled className='border-2 p-2 w-96' />
        </div>
        <div className='flex flex-col mb-3'>
            <label className='text-lg font-bold' >Password</label>
            <input type="password" name="password" required onChange={handelChange} className='border-2 p-2 w-96'/>
        </div>
        <button className='bg-[#ff2e2e] text-white font-bold py-2 px-4 rounded'>Delete</button>
        {error && <p className='text-[#f93a3a]'>{error}</p>}
    </form>

    </div>

    </div>
  )
}

export default DeleteProfile

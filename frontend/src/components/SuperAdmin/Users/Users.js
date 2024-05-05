import React, { useState, useEffect } from 'react'
import { HiMiniIdentification } from "react-icons/hi2";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, } from '../../../redux/user/userSlice'
import './Users.css'


const Users = () => {

    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);




    useEffect(() => {
        fetchData();
    }, [success]);




    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/super/getUsersDetails');
            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            } else {
                console.log(responseData.message);
            }
        } catch (error) {
            console.log(error);
        }
    }













    const handleTruePost = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/super/bannedUser/${id}`, {
                method: 'POST',
            });
            const data = await response.json();
            if (data.success) {
                setSuccess(true);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }








    const handleFalsePost = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/super/UnBannedUser/${id}`, {
                method: 'POST',
            });
            const data = await response.json();
            if (data.success) {
                setSuccess(true);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleRefresh = () => {
        fetchData();
    }




    return (
        <div>
            <div className=' pr-7 lg:pr-72 w-screen py-5 pl-7'>
                <div className='text-5xl font-bold text-center'>
                    <h1>Users Details</h1>
                </div>
                <div>
                    <div className='flex justify-end mt-5 mb-3'>
                        <form>

                            <div className="relative mr-4">
                                <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                    <i class="fa-solid fa-magnifying-glass" />
                                </div>
                                <input type="text" placeholder='Enter Candidate Name' onChange={(e) => setSearch(e.target.value)} className='w-80 bg-white-light py-2 px-12 rounded-full border border-[#000] focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-[#bdbcbc] focus:drop-shadow-lg' />
                            </div>

                        </form>

                        <button
                            type="button"
                            className="btn btn-primary float-refresh-btn"
                            onClick={handleRefresh}
                        >
                            Refresh
                        </button>
                    </div>



                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-[#ead0d0] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Banned/Unbanned
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {data && data.filter((item) => {
                                    return search.toLowerCase() === ''
                                        ? item
                                        : item.fullname.toLowerCase().includes(search);
                                }).map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.banned ? 'Banned' : 'Not Banned'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.banned ? <FaCheckCircle color='green' onClick={() => handleFalsePost(item._id)} /> : <ImCross color='red' onClick={() => handleTruePost(item._id)} />}



                                        </td>

                                    </tr>


                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Users

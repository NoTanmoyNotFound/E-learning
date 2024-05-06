import React, { useState, useEffect } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { TbReload } from "react-icons/tb";
import '../Users/Users.css';

const Student = () => {


    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);



    const fetchUserInfo = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/super/getEnrolledStudentsDetails');
            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            } else {
                console.error(responseData.error);
            }
        } catch (error) {
            console.error('Error fetching enrolled students data:', error);
        } finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        fetchUserInfo();
    }, []);




    const handlePaymentStatusChange = async (id, status) => {
        try {
            const response = await fetch(`http://localhost:8000/api/super/${status ? 'clearPayment' : 'notClearPayment'}/${id}`, {
                method: 'POST',
            });
            const responseData = await response.json();
            if (responseData.success) {
                fetchUserInfo();
                window.location.reload(); // Reload the page
            } else {
                console.error(responseData.error);
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };




    const handleRefresh = () => {
        fetchUserInfo();
    }





    return (
        <div>
            <div className=' pr-7 lg:pr-72 w-screen py-5 pl-7'>
                <div className='text-5xl font-bold text-center'>
                    <h1>Enrolled Students Details</h1>
                </div>
                <div>
                    <div className='flex justify-end mt-5 mb-3'>
                        <form>

                            <div className="relative">
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
                            <TbReload />
                        </button>
                    </div>



                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-[#ead0d0] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Student Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Student Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Course Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Course Fees
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teacher's name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teacher's Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teacher's Payment
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Payment Operation
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
                                            {item.studentname}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.coursename}
                                        </td>
                                        <td className="px-6 py-4">
                                            Rs - {item.amount}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.teacherName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.teacherEmail}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.paid ? 'Paid' : 'Due'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.paid ? (
                                                <FaCheckCircle className='deletebtnn' color="green" onClick={() => handlePaymentStatusChange(item._id, false)} />
                                            ) : (
                                                <FaTimesCircle className='deletebtnn' color="red" onClick={() => handlePaymentStatusChange(item._id, true)} />
                                            )}
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

export default Student

import React, { useState, useEffect } from 'react'
import { HiMiniIdentification } from "react-icons/hi2";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Teachers() {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);



    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const response = await fetch('http://localhost:8000/api/super/showAllAcceptedTeachers');
                const responsedata = await response.json();
                console.log(Array.isArray(response));
                console.log(responsedata);
                if (responsedata.success === false) {
                    console.log(responsedata);
                } else {
                    setData(responsedata.data);

                    console.log(responsedata);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchUserInfo();
    }, []);

    console.log(Array.isArray(data));




    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/super/deleteAcceptedTecher/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success === false) {
                console.log(data);
                return;
            }

            if (data.success === true) {
                window.location.reload();
                setSuccess(data.data);
            }

        } catch (error) {
            console.log(error);
        }
    }





















    return (
        <div className=' pr-7 lg:pr-72 w-screen py-5 pl-7 allUserSuperMain'>
            <div className='text-5xl font-bold text-center'>
                <h1>Teacher's Details</h1>
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
                </div>



                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-[#ead0d0] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Teacher's name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" class="px-4 py-3">
                                    Resume
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Delete
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
                                        {item.fullname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.phone}
                                    </td>
                                    <td classname="px-6 py-4 text-xl">
                                        {item.idProof ? <Link to={item.idProof} target='_blank'> <HiMiniIdentification /> </Link> : "not found"}
                                    </td>
                                    <td className="px-6 py-4 text-xl">
                                        {item.resume ? <Link to={item.resume} target='_blank'> <IoDocumentAttachSharp /> </Link> : "not found"}
                                    </td>
                                    <td className="px-6 py-4">


                                        <ImCross color='red' onClick={() => handleDelete(item._id)} />
                                    </td>
                                </tr>


                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default Teachers;

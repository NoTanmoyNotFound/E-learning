import React, { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im";
import {  useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const TA_Payment = () => {
  const navigation = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
  async function fatchCourse() {
      const res = await fetch(`http://localhost:8000/api/teacher/allcoursePayment/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
          setError(data.message);
      } else {
          setData(data.data);
          console.log(data.data.reverse());
      }
  }
  fatchCourse();
}, []);




























return (
  <div className=' pr-7  py-5 pl-7 allUserSuperMain'>
      <div className='text-5xl font-bold text-center'>
          <h1>All Payment</h1>
      </div>
      <div>
          <div className='flex justify-end mt-5 mb-3'>
              <form>

                  <div className="relative">
                      <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                          <i class="fa-solid fa-magnifying-glass" />
                      </div>
                      <input type="text" placeholder='Enter Course Name' onChange={(e) => setSearch(e.target.value)} className='w-80 bg-white-light py-2 px-12 rounded-full border border-[#000] focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-[#bdbcbc] focus:drop-shadow-lg' />
                  </div>

              </form>
          </div>



          <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-[#ead0d0] dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Course name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Student Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Email
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Amount paid
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Payment Status 
                          </th>

                      </tr>
                  </thead>
                  <tbody>
                      {data && data.filter((item) => {
                          return search.toLowerCase() === ''
                              ? item
                              : item.coursename.toLowerCase().includes(search);
                      }).map((item, index) => (
                          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.coursename}
                              </th>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.studentname}
                              </th>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.email}
                              </th>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.amount}
                              </th>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.paid === true ? <p className='text-[#00cc00]'>Paid</p>  : <p className='text-[#fb3c3c]'>Not Paid </p> }
                              </th>
                          </tr>


                      ))}
                  </tbody>
              </table>
          </div>

      </div>
  </div>

)
}

export default TA_Payment;

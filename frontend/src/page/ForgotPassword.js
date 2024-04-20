import React from 'react'
import { useState } from 'react';
import { RiEyeCloseLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [passwoed, setPassword] = useState(false)
    const [inputdata, setInputdata] = useState({});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputdata({ ...inputdata, [name]: value });
    }

    // send Email
    const hadelSend = async (e) => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputdata),
            })
            const data = await response.json();
            if (data.success === false) {
                return;

            }

        } catch (error) {
            console.log(error);
        }


    }



    console.log(inputdata);
    const handelSubmit = async(e) => { 
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/auth/chackOtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputdata),
            })
            const data = await response.json();
            if (data.success === false) {
                console.log(data);
                return;
            }
    
            navigate('/signin');
            
        } catch (error) {
            console.log(error);
            
        }
    }










    return (
        <div className="bg-gradient-to-r from-[#f28383] from-10% via-[#906cd2] via-30% to-[#481edc] to-90%  flex items-center justify-center h-screen">
            <div className="max-w-[960px] bg-black-dark flex items-center gap-20 p-5 rounded-2xl ">
                <div id="nok" className="max-w-80 grid  ">
                    <h1 className="text-5xl font-bold text-white mb-9">Login</h1>
                    <p className="text-dull-white mb-9">Enter your email address. To get Otp for reset your password</p>
                    <form action="#" className="space-y-6 text-white">


                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-envelope-open" />
                            </div>


                            <div className=' flex'>
                                <input type="email" name='email' onChange={handleChange} placeholder="Email Address" className=" w-64 bg-white-light py-2 px-12 rounded-l-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                                <div className="cursor-pointer top-1 left-[280px] bg-white-light rounded-r-full p-2  flex items-center justify-center pr-2 text-blue-300 border-l" >
                                    <button onClick={hadelSend}>Send</button>
                                </div>
                            </div>


                        </div>
                        {/*otp*/}

                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-envelope-open" />
                            </div>
                            <input type="text" name='otp' onChange={handleChange} placeholder="Enter OTP" className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                        </div>

                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-lock" />
                            </div>


                            <div className=' flex'>
                                <input type={!passwoed ? "password" : "text"} onChange={handleChange} name='password' placeholder="Enter New Password" className=" w-72 bg-white-light py-2 px-12 rounded-l-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                                <div className="cursor-pointer top-1 left-[280px] bg-white-light rounded-r-full p-2  flex items-center justify-center pr-2 text-blue-300" onClick={() => setPassword(!passwoed)}>
                                    {!passwoed ? <RiEyeCloseLine /> : <HiOutlineEye />}
                                </div>
                            </div>


                        </div>
                        <button onClick={handelSubmit} className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"> Sign In</button>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default ForgotPassword

import { useState } from 'react';
import React from 'react'
import bacground from './assets/signup-background.svg';
import teampic from './assets/teamwork.svg';
import { useNavigate, Link } from 'react-router-dom';
import { RiEyeCloseLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { signinStart, signinSuccess, signinFailure } from "../redux/user/userSlice";
import OAuth from './OAuth';

function Signin() {
    const navigate = useNavigate();
    const [passwoed, setPassword] = useState(false)
    const [inputdata, setInputdata] = useState({})
    const {  error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputdata({ ...inputdata, [name]: value });
    }


    

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = inputdata;
            if (!email) {
                dispatch(signinFailure("Enter your Email"));
                console.log("Enter your Email");
                return;
            } else if (!email.includes("@")) {
                dispatch(signinFailure("Enter valid Email"));
                return;
            } else if (!password) {
                dispatch(signinFailure("Enter Password"));
                return;
            } else if (password.length < 8) {
                dispatch(signinFailure("Your Password must be at least 8 characters"));
                return;
            }

            else {
                dispatch(signinStart());

                const response = await fetch('http://localhost:8000/api/auth/signin', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputdata),
                })
                const data = await response.json();
                if (data.success === false) {
                    dispatch(signinFailure(data.message));
                    return;
                }
                console.log(data);
                dispatch(signinSuccess(data));

                navigate('/');

            }
        } catch (error) {
            dispatch(signinFailure(error));
            console.log("Error:", error)


        }
    }







    return (
        <div className="bg-gradient-to-r from-[#f28383] from-10% via-[#906cd2] via-30% to-[#481edc] to-90%  flex items-center justify-center h-screen">
            <div className="max-w-[960px] bg-black-dark flex items-center gap-20 p-5 rounded-2xl ">
                <div id="ok" className="relative hidden md:block">
                    <img src={bacground} alt="bacgroung" />
                    <img src={teampic} alt="other pic" className="absolute top-36" />
                </div>
                <div id="nok" className="max-w-80 grid  ">
                    <h1 className="text-5xl font-bold text-white mb-9">Login</h1>
                    <p className="text-dull-white mb-9">This is for admin, where you can acces the dashbord.</p>
                    <form action="#" className="space-y-6 text-white">
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-envelope-open" />
                            </div>
                            <input type="email" name='email' onChange={handleChange} placeholder="Email Address" className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                        </div>
                        <div className="relative">
                            <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                <i className="fa-solid fa-lock" />
                            </div>


                            <div className=' flex'>
                                <input type={!passwoed ? "password" : "text"} onChange={handleChange} name='password' placeholder="password" className=" w-72 bg-white-light py-2 px-12 rounded-l-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                                <div className="cursor-pointer top-1 left-[280px] bg-white-light rounded-r-full p-2  flex items-center justify-center pr-2 text-blue-300" onClick={() => setPassword(!passwoed)}>
                                    {!passwoed ? <RiEyeCloseLine /> : <HiOutlineEye />}
                                </div>
                            </div>


                        </div>
                        <button onClick={handelSubmit} className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"> Sign In</button>

                        <OAuth />
                    </form>
                    {error && typeof error === 'string' && (
                        <p className="mb-3 text-red-500 mt-8" style={{ color: "red" }}>{error}</p>
                    )}


                    <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm ">
                        <p>Don't have an account?
                            <Link to={"/signup"}>

                                <span className="text-neon-blue pl-2 font-semibold cursor-pointer">Sign up</span>
                            </Link></p>
                        <p>Forgot password?
                            <span className="text-neon-blue font-semibold pl-2 cursor-pointer">Reset password</span></p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Signin

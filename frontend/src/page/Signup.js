import React, { useState } from 'react'
import fig from './assets/edited.png'
import { useNavigate, Link } from 'react-router-dom';
import { RiEyeCloseLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import OAuth from './OAuth';
function Signup() {
  const navigate = useNavigate();
  const [passwoed, setPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const [inputdata, setInputdata] = useState({
  })

  // console.log(inputdata);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }
  console.log(inputdata);


  //submit

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {

      const { name, username, email, password } = inputdata;
      if (name === "") {
        setError("Enter your Full Name");
      } else if (email === "") {
        setError("Enter your Full Name");
      } else if (!email.includes("@")) {
        setError("Enter valid Email");
      } else if (username === "") {
        setError("Enter username");
      } else if (password === "") {
        setError("Enter Password");
      } else if (password.length < 8) {
        setError("Your Password Must be 8 characters or more");
      }
      else {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputdata),
        })
        const data = await response.json();
        setLoading(false)
        if (data.success === false) {
          setError(data);
          return;
        }
        

        navigate('/signin');




      }
    } catch (error) {
      setLoading(false)
      setError(error.message);

    }


  }





  return (
    <div className="bg-gradient-to-r from-[#e96767] from-10% via-[#d13a74] via-30% to-[#c615d6] to-90% flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark flex items-center gap-20 p-5 rounded-2xl">
        <div className="hidden md:block">
          <img src={fig} alt="bacgroung" />
        </div>
        <div className="max-w-80 grid">
          <h1 className="mb-9 text-5xl font-bold text-white">Sign Up</h1>
          <p className=" mb-9 text-dull-white">Access to 300+ hours courses anytime, anywhere</p>
          <form action="#" className="space-y-6 text-white">



            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-red-500">
                <i className="fa-solid fa-user" />
              </div>
              <input type="text" name='name' placeholder="Full Name " onChange={handleChange} className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-red focus:drop-shadow-lg" required />
            </div>


            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-red-500">
                <i className="fa-solid fa-hashtag" />
              </div>
              <input type="text" name='username' onChange={handleChange} placeholder="Username" className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-red focus:drop-shadow-lg" required />
            </div>









            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-red-500">
                <i className="fa-solid fa-envelope-open" />
              </div>
              <input type="email" name='email' onChange={handleChange} placeholder="Email Address" className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-red focus:drop-shadow-lg" required />
            </div>




















            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-red-500">
                <i className="fa-solid fa-lock" />
              </div>
              <div className=' flex'>
                <input type={!passwoed ? "password" : "text"} onChange={handleChange} name='password' placeholder="password" className=" w-72 bg-white-light py-2 px-12 rounded-l-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" required />
                <div className="cursor-pointer top-1 left-[280px] bg-white-light rounded-r-full p-2  flex items-center justify-center pr-2 text-blue-300" onClick={() => setPassword(!passwoed)}>
                  {!passwoed ? <RiEyeCloseLine /> : <HiOutlineEye />}
                </div>
              </div>
            </div>
            <button disabled={loading} onClick={handelSubmit} className="bg-gradient-to-r from-rose-500 to-amber-200 w-80 font-semibold rounded-full py-2">{loading ? "Loading..." : " Sign Up "}</button>
          <OAuth />
          </form>
          <p className='text-red-500 mt-3 ' style={{color: "red"}}>{error && "Something went wrong"}</p>
          <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
            <p>Already have an account?
              <Link to="/signin">
                <span className="text-neon-blue pl-2 font-semibold cursor-pointer">Sign in</span></Link></p>
          </div>
        </div>
      </div>
      <ToastContainer />
      
    </div>

  )
}

export default Signup

import React, { useState, useEffect, useRef } from 'react'

import '../../SuperAdmin/SuperAdmin.css'
import './ProfileView.css'
import S_header from '../../SuperAdmin/S_header/S_header'
// import S_sidebar from '../../SuperAdmin/S_sidebar/S_sidebar'
import P_sidebar from './P_sidebar'
import profile from "./assets/profile.png";
import { signOut } from '../../../redux/user/userSlice';
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/LinkedIn.png";
import github from "./assets/Github.png";
import facebook from "./assets/facebook.png";
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { userInfoStart, userInfoSuccess, userInfoFailure } from "../../../redux/user/localSlice";


const ProfileView = () => {
    const { currentUser } = useSelector((state) => state.user); 
    const [course, setCourse] = useState(0);
    const [comment, setComment] = useState(0);





    const fatchsutdentcourse = async () => {
        try {
            const response = await fetch(`/api/user/sendcourses/${currentUser._id}`);
            const data = await response.json();
            setCourse(data.length);
        } catch (error) {
            console.error('Error fetching enrolled students data:', error);
        } finally {
           
        }
    };

    const fatchCommend = async () => {
        try {
            const response = await fetch(`/api/user/getcomments/${currentUser._id}`);
            const data = await response.json();
            console.log(data);
            setComment(data.data.length);
        } catch (error) {
            console.error('Error fetching enrolled students data:', error);
        } finally {
           
        }
    };





















    useEffect(() => {
        async function fetchUserInfo() {
            dispatch(userInfoStart());
            try {
                const response = await fetch(`/api/user/updateInfo/${currentUser._id}`);
                const data = await response.json();
                console.log(data);
                if (data.success === false) {
                    dispatch(userInfoFailure(data.message));
                } else {
                    dispatch(userInfoSuccess(data));
                }
            } catch (error) {
                dispatch(userInfoFailure(error.message));
            }
        }

        fetchUserInfo();
        fatchsutdentcourse();
        fatchCommend();
    }, []);


    const fileRef = useRef(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [profilePic, setProfilePic] = useState(profile);

    const { currentUserInfo } = useSelector((state) => state.local);
   
    console.log(currentUser);
    console.log(currentUserInfo);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const goEdit = () => {
        navigate("/EditProfile")
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        const reader = new FileReader();

        reader.onload = () => {
            setProfilePic(reader.result);
        };

        if (files.length > 0) {
            reader.readAsDataURL(files[0]);
        }
    };








    return (
        <div className='grid-container'>
            <S_header OpenSidebar={OpenSidebar} />
            <P_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} profilePic={profilePic} />
            {/* <S_home /> */}

            <main className="mainn-container mt-0 px-8 max-w-11/12" style={{  }}>
                <div className="info bg-white p-[20px] rounded-[40px]">
                    <div className="userBox  mb-[25px] rounded-[25px] flex bg-gradient-to-r from-cyan-100 to-blue-100 pt-1 pr-1 pb-1 pl-2" >
                        <div className="user w-52 pr-3 pl-3">
                            <img src={currentUser.profilePicture} height={100} width={100} id="pfp" className='mb-2 object-cover rounded-full bg-white' />
                            {/* <div className="round">
                                <input type="file" id="input-file" accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} />
                                <label htmlFor="input-file" id="ok"> <i className="fa fa-camera" style={{ transform: 'scale(1.3)' }} /></label>
                            </div> */}
                            <h3 className="name text-xl text-white font-Nunito font-bold" >{currentUser.name}</h3>
                            <p className="role">Student</p>
                            <button onClick={goEdit} className="gokgok-btn w-48 bg-white rounded-3xl p-2 h-12 mt-2 mr-2 font-medium ">update profile</button>
                        </div>
                        <div className="user1">
                            <p id="bio" className=' font-Nunito'>{currentUserInfo ? currentUserInfo.bio === "none" ? "Update your profile" : currentUserInfo.bio : "updaet your profile"}</p>
                            <p className="h">Languaged Used</p>
                            <p id="language">{currentUserInfo ? currentUserInfo.language === "none" ? "Update your profile" : currentUserInfo.language : "updaet your profile"}</p>
                            <p className="h">Institute</p>
                            <p id="institute">{currentUserInfo ? currentUserInfo.collage === "none" ? "Update your profile" : currentUserInfo.collage : "updaet your profile"}</p>
                            <h6 className="social text-base text-white font-semibold mt-1">Follow me on Social Media :</h6>
                            <div className="imgs flex gap-2 ">
                                {currentUserInfo ? (
                                    <>
                                        {currentUserInfo.instagram === "none" &&
                                            currentUserInfo.github === "none" &&
                                            currentUserInfo.facebook === "none" &&
                                            currentUserInfo.linkedin === "none" ? (
                                            <span>Update your profile</span>
                                        ) : (
                                            <>
                                                {currentUserInfo.instagram !== "none" && (
                                                    <Link target="_blank" to={currentUserInfo.instagram}>
                                                        <img src={instagram} alt="Instagram" />
                                                    </Link>
                                                )}
                                                {currentUserInfo.github !== "none" && (
                                                    <Link target="_blank" to={currentUserInfo.github}>
                                                        <img src={github} alt="GitHub" />
                                                    </Link>
                                                )}
                                                {currentUserInfo.facebook !== "none" && (
                                                    <Link target="_blank" to={currentUserInfo.facebook}>
                                                        <img src={facebook} alt="Facebook" />
                                                    </Link>
                                                )}
                                                {currentUserInfo.linkedin !== "none" && (
                                                    <Link target="_blank" to={currentUserInfo.linkedin}>
                                                        <img src={linkedin} alt="LinkedIn" />
                                                    </Link>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    ""
                                )}



                            </div>
                        </div>
                    </div>
                    <div className="box-container flex gap-3 ">
                        <div className="boxyy rounded-2xl ">
                            <div className="flex">
                                <i className="fas fa-bookmark  bg-white p-3 text-xl rounded-lg" />
                                <div>
                                    <span>{course}</span>
                                    <p>courses Enrolled</p>
                                </div>
                            </div>
                            <button onClick={()=> navigate("/ProfileCourse")} className="gokgok-btn   bg-white rounded-3xl p-2 h-12 mt-3 mr-2  font-medium">view playlists</button>
                        </div>
                        <div className="boxyy rounded-2xl ">
                            <div className="flex text-left mb-3">
                                <i className="fas fa-heart  bg-white p-3 text-xl rounded-lg" />
                                <div>
                                    <span>33</span>
                                    <p>videos liked</p>
                                </div>
                            </div>
                            <button href="#" className="gokgok-btn   bg-white rounded-3xl p-2 h-12 mt-3 mr-2 font-medium">view liked</button>
                        </div>
                        <div className="boxyy rounded-2xl">
                            <div className="flex">
                                <i className="fas fa-comment bg-white p-3 text-xl rounded-lg" />
                                <div>
                                    <span>{comment}</span>
                                    <p>videos comments</p>
                                </div>
                            </div>
                            <button href="#" className="gokgok-btn  bg-white rounded-3xl p-2 h-12 mt-2 mr-2 font-medium">view comments</button>
                        </div>
                    </div>
                </div>

            </main>


        </div>
    )
}

export default ProfileView;


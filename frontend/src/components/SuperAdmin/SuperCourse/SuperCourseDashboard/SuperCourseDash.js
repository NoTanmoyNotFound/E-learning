import React, { useState, useEffect } from 'react';
import S_header from '../../S_header/S_header';
import S_sidebar from '../../S_sidebar/S_sidebar';
import '../../S_home/S_home.css';
import './SuperCourseDash.css';
import '../../SuperAdmin.css';
import { MdLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Home/Footer/Footer';

const SuperCourseDash = () => {




    // menubar toggle responsive start -----------------------------------------------
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    // menubar toggle responsive end -----------------------------------------------







    //for course title upload on DB start----------------------------->
    const navigate = useNavigate();

    //for storing data starting
    const [titleUpload, setTitleUpload] = useState({
        courseTitle: ""
    });

    let name, value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setTitleUpload({ ...titleUpload, [name]: value });
    }

    // connect with backend --->
    const postData = async (e) => {

        //to no reload code start
        // e.preventDefault();
        //to no reload code end

        const { courseTitle } = titleUpload;

        // Check if any required field is empty
        if (!courseTitle) {
            window.alert("Please fill in all the required fields");
            return;
        }

        // data fetch means post frontend to backend
        const res = await fetch("/SuperCourseDash", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ courseTitle })
        })

        const data = await res.json();

        if (res.status === 422) {
            window.alert("Course already exists!");
        } else if (res.status === 201) {
            window.alert("Course has been uploaded successfully!");
        } else {
            window.alert("Course upload failed!");
        }
    }

    //for course title upload on DB end----------------------------->









    //no. of courses show count ------------->
    const [courseCount, setCourseCount] = useState(0);

    useEffect(() => {
        // Fetch the course count from the backend API (/countCourses)
        fetch('/countCourses')
            .then(response => response.json())
            .then(data => {
                setCourseCount(data.count); // Assuming my backend response has a property 'count' for the number of courses
            })
            .catch(error => {
                console.error('Error fetching course count:', error);
            });
    }, []);
    //no. of courses show count ------------->








    return (
        <div>
        <div className='grid-container'>
            <S_header OpenSidebar={OpenSidebar} />
            <S_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            {/* home code  */}
            <main className='mainn-container'>
                <div className='mainn-title'>
                    <h3 className='primaryText'>CONTROLL COURSES</h3>
                </div>

                <div className='mainn-cardds'>
                    <div className='cardd'>
                        <div className='cardd-inner'>
                            <div className="pushable" style={{ display: "flex", padding: ".5rem", borderRadius: "10px", background: "white"}}>
                                <a href="#" style={{ display: "flex", gap: "1.6rem" }}>
                                    <h3 className='front primaryText2'>Upload Courses</h3>
                                    <PiStudentBold className='cardd_icon' style={{color:"#1f3e72"}}/>
                                </a>

                            </div>
                        </div>

                        <div className="descrip-course">
                            <form className='descc'>
                                <input type="text" name="courseTitle" id="courseTitle" value={titleUpload.courseTitle} onChange={handleInput} placeholder='Course Title' /><br /><br />
                                <button className='button' onClick={postData} type='submit'>Upload</button>
                            </form>
                        </div>
                        {/* Dynamic count */}
                        <hr className='line'></hr>
                        <div className='primaryText22'><span id='sT'>Uploaded Courses Keywords: {courseCount}</span></div>
                    </div>


                    <div className='cardd'>
                        <div className='cardd-inner'>
                            <div className="pushable" style={{ display: "flex", padding: ".5rem", borderRadius: "10px", background: "white" }}>
                                <a href="#" style={{ display: "flex", gap: "1.6rem" }}>
                                    <h3 className='front primaryText2'>Display Courses</h3>
                                    <MdLibraryBooks className='cardd_icon' style={{color:"#1f3e72"}}/>
                                </a>

                            </div>
                        </div>

                        <div className="descrip-course">
                            <span className='descc secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam id architecto velit, deleniti dignissimos.</span>
                        </div>
                        <hr className='line'></hr>
                        {/* Dynamic count */}
                        <div className='primaryText22'><span id='sT'>Uploaded Courses: 300</span></div>
                        <a href="" className='button' style={{textAlign:"center", fontSize:"1.2rem"}}>Goto Course Edit</a>
                    </div>

                </div>

            </main>

        </div>
        <Footer/>
        </div>
    )
}

export default SuperCourseDash;

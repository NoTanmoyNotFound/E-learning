import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuperCourse.css';


const SuperCourse = () => {
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
        e.preventDefault();

        const { courseTitle } = titleUpload;

        // Check if any required field is empty
        if (!courseTitle) {
            window.alert("Please fill in all the required fields");
            return;
        }

        // data fetch means post frontend to backend
        const res = await fetch("/superCourseTitle", {
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


    return (
        <>
            <div className='container' style={{ margin: "10%" }}>
                <input type="text" name="courseTitle" id="courseTitle" value={titleUpload.courseTitle} onChange={handleInput} placeholder='Course Title' /><br /><br />
                <button className='btn' onClick={postData} type='submit'>Upload</button>
            </div>
        </>
    )
}

export default SuperCourse;

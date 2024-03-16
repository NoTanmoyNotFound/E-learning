import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadCource.css';

const UploadCourse = () => {
    const navigate = useNavigate();



    //for storing data starting

    const [upload, setUpload] = useState({
        title: "",
        description: "",
        duration: "",
        teachername: "",
        teacheremail: ""
    });


    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUpload({ ...upload, [name]: value });
    }



    // connect with backend --->
    const postData = async (e) => {

        e.preventDefault();

        const { title, description, duration, teachername, teacheremail } = upload;


        // Check if any required field is empty
        if (!title || !description || !duration || !teachername || !teacheremail) {
            window.alert("Please fill in all the required fields");
            return; // Stop further execution if validation fails
        }

        // data fetch means post frontend to backend
        const res = await fetch("/uploadd", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ title, description, duration, teachername, teacheremail })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            window.alert("Registration Successful");
            console.log("egistration Successful");

            // to redirect on profile page required
            navigate('/allCourses');
        }
    }
    //for storing data ending

    return (
        <div className='container' style={{ margin: "10%" }}>
            <input type="text" name="title" value={upload.title} onChange={handleInputs} placeholder='Title' required /> <br /> <br />
            <input type="text" name="description" value={upload.description} onChange={handleInputs} placeholder='description' required /> <br /> <br />
            <input type="text" name="duration" value={upload.duration} onChange={handleInputs} placeholder='duration' required /> <br /> <br />
            <input type="text" name="teachername" value={upload.teachername} onChange={handleInputs} placeholder='teachername' required /> <br /> <br />
            <input type="email" name="teacheremail" value={upload.teacheremail} onChange={handleInputs} placeholder='teacheremail' required /> <br /> <br />
            <button className='btn' onClick={postData}>Upload</button>
        </div>
    );
}

export default UploadCourse;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {

    // title data get --------------------------------------------------------->
    const [titles, setTitles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/titles')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.titles)) {
                    setTitles(data.titles);
                } else {
                    console.error('Error fetching titles: Response is not an array');
                }
            })
            .catch(error => console.error('Error fetching titles:', error));
    }, []);


    // upload titles or tags start -------------------------------------------------->
    const [upload, setUpload] = useState({ // Define the upload state variable
        title: "",
        desc: ""
    });

    // State for showing/hiding input box for "Others" ------------------------------------->
    const [showOtherInput, setShowOtherInput] = useState(false);
    // State to store the value of the "Other Title" input field----------------------------------------->
    const [otherTitle, setOtherTitle] = useState(""); 

    const handleSelectChange = (e) => {
        const { value } = e.target;
        if (value === "others") {
            setShowOtherInput(true); // Show the input box for "Other Title" if "Others" option is selected
            setUpload({ ...upload, title: value }); // Update the title in the upload state
        } else {
            setShowOtherInput(false); // Hide the input box for "Other Title" otherwise
            setUpload({ ...upload, title: value }); // Update the title in the upload state
        }
    }

    const handleOtherTitleChange = (e) => {
        setOtherTitle(e.target.value);
    }

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUpload({ ...upload, [name]: value }); // Update the upload state
    }

    const postData = async (e) => {
        e.preventDefault();

        let selectedTitle = upload.title;
        if (upload.title === "others") {
            selectedTitle = otherTitle; // Use the custom title if "Others" option is selected
        }

        if ((!showOtherInput && !selectedTitle) || !upload.desc) {
            window.alert("Please fill in all the required fields");
            return;
        }

        const res = await fetch("/testModel", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: selectedTitle, desc: upload.desc })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate('/allCourses');
        }
    }

    return (
        <div style={{ margin: "100px" }}>
            <form onSubmit={postData}>
                <label htmlFor="title">Course Title</label>
                <br />
                {showOtherInput ? ( // Conditionally render the input box for "Other Title" if showOtherInput is true
                    <input type="text" name="title" value={otherTitle} onChange={handleOtherTitleChange} placeholder="Enter other title" />
                ) : (
                    <select name="title" id="title" value={upload.title} onChange={handleSelectChange}>
                        <option value="">Select a course</option>
                        {titles.map((title, index) => (
                            <option key={index} value={title.courseTitle}>
                                {title.courseTitle}
                            </option>
                        ))}
                        <option value="others">Others</option> {/* Add the "Others" option */}
                    </select>
                )}
                <br />
                <br />
                <label htmlFor="desc">Description</label>
                <br />
                <textarea name="desc" id="desc" cols="20" rows="5" value={upload.desc} onChange={handleInputs} placeholder="Write a short description of the course"></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Test;

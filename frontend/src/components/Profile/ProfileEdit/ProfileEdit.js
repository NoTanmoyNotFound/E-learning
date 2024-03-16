import React from 'react'
import './ProfileEdit.css'
import profile from "../ProfileView/assets/profile.png"
import { useState } from 'react'

const ProfileEdit = () => {
    const [profilePic, setProfilePic] = useState(profile);
    const handleFileChange = (event) => {
        const files = event.target.files;
        const reader = new FileReader();

        reader.onload = () => {
            setProfilePic(reader.result);
            setInputdata({ ...inputdata, pic: files });
        };

        if (files.length > 0) {
            reader.readAsDataURL(files[0]);
        }
    };
    const handleReset = () => {
        setProfilePic(profile); // Reset profile picture to default
        setInputdata({ ...inputdata, pic: "" }); // Clear the pic field in inputdata
    };

    const [inputdata, setInputdata] = useState({
        pic : "",
        username : "",
        fullname : "",
        email : "",
        company : ""
    });

    const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log(`Name: ${name}, Value: ${value}`);

    if (name === 'pic') {
      setInputdata({ ...inputdata, [name]:  e.target.files[0]  });
    } else {
      // For other input fields (funame, email, password)
      setInputdata({ ...inputdata, [name]: value });
    }
    }
    console.log(inputdata);
  




   

    return (

        <div>

            <div className="tab-pane fade active show" id="account-general">
                <form action="">
                    <div className="card-body media align-items-center">
                        <img src={profilePic} height={100} width={100} id="pfp" className='mb-2 object-cover rounded-full bg-white' />

                        <div className="media-body ml-4">
                            <label className="btn btn-outline-primary">
                                Upload new photo
                                <input type="file" name='pic' className="account-settings-fileinput" onChange={handleFileChange} />
                            </label> &nbsp;
                            <button type="reset" className="btn btn-default md-btn-flat" onClick={handleReset}>Reset</button>
                            <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pt-0">
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" name='username' className="form-control mb-1" defaultValue="" onChange={ handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" name='fullname' className="form-control" defaultValue="" onChange={ handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input type="text" name='email' className="form-control mb-1" defaultValue=""  onChange={ handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input type="text" name='company' className="form-control" defaultValue="" onChange={ handleChange}/>
                        </div>
                        <div className="form-group flex items-center justify-center p-2 mb-0">
                            <button
                                type='submit'
                                className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md'
                            > Submit
                            </button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default ProfileEdit

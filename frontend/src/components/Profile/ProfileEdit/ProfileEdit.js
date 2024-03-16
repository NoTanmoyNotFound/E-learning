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
        };

        if (files.length > 0) {
            reader.readAsDataURL(files[0]);
        }
    };
    return (

        <div>

            <div className="tab-pane fade active show" id="account-general">
                <form action="">
                    <div className="card-body media align-items-center">
                        <img src={profilePic} height={100} width={100} id="pfp" className='mb-2 object-cover rounded-full bg-white' />

                        <div className="media-body ml-4">
                            <label className="btn btn-outline-primary">
                                Upload new photo
                                <input type="file" className="account-settings-fileinput" onChange={handleFileChange} />
                            </label> &nbsp;
                            <button type="reset" className="btn btn-default md-btn-flat">Reset</button>
                            <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pt-0">
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control mb-1" defaultValue="" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" defaultValue="" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input type="text" className="form-control mb-1" defaultValue="" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input type="text" className="form-control" defaultValue="" />
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

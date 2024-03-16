import { useState } from 'react';
import React from 'react'
import './ProfileEdit.css';


const EditPassword = () => {
    const [inputdata, setInputdata] = useState({

      
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
          
          setInputdata({ ...inputdata, [name]: value });
        }
        console.log(inputdata);


    return (
        <div className='pt-2 pl-4 pr-4 pb-4'>
        <form>


            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" name='oldpassword' className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" name='newpassword' className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" name='confirmpassword' className="form-control" onChange={handleChange} />
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
    )
}

export default EditPassword

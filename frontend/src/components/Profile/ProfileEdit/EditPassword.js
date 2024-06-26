import { useState } from 'react';
import React from 'react'
import './ProfileEdit.css';
import { useDispatch, useSelector } from 'react-redux';


const EditPassword = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.user);
    const [inputdata, setInputdata] = useState({
        id : currentUser._id,
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [comedata, setComedata] = useState(null);
    const handleChange = (e) => {
        const {name, value} = e.target;
          
          setInputdata({ ...inputdata, [name]: value });
        }
        console.log(inputdata);
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (inputdata.password !== inputdata.confirmpassword) {
              console.log("Passwords do not match");
              return;
          }
            try {
                console.log("ok");
                const res = await fetch(`/api/user/updatePass`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  
                  },
                  body: JSON.stringify(inputdata),
                });
                
                const data = await res.json();
                if (data.success === false) {
                    console.log(data);
                    setError(data.message);
                    setComedata(data.message);
                  return;
                }
                setSuccess("Password updated successfully");
                setComedata(data.message);
              } catch (error) {
                setComedata(error);  
                console.log(error);             
              }
        }

    return (
        <div className='pt-2 pl-4 pr-4 pb-4'>
        <form action="" onSubmit={handleSubmit}>


            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" name='oldpassword' className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" name='password' className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" name='confirmpassword' className="form-control" onChange={handleChange} />
                </div>
                <p className=' font-bold'>{comedata}</p>
                <div className="form-group flex items-center justify-center p-2 mb-0">
              
                <button
                                type='submit'
                                className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md' style={{ backgroundColor: "#26B4FF", transition: "background-color 0.3s" }}
                                onMouseOver={(e) => { e.target.style.backgroundColor = "#FFFFFF"; }}
                                onMouseOut={(e) => { e.target.style.backgroundColor = "#26B4FF"; }}
                            > Submit
                            </button>

                        </div>
            </div>
            {success && <p className=' font-bold'>{success}</p>}
            {error && <p className=' font-bold'>{error}</p>}
            </form>
        </div>
    )
}

export default EditPassword

import React, { useState } from 'react';
import './ProfileEdit.css';
import { useSelector, useDispatch} from 'react-redux';
import {updateUserStart, updateUserSuccess, updateUserFailure} from '../../../redux/user/userSlice';


function EditInfo() {
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    

    const [inputdata, setInputdata] = useState({
        userid: currentUser._id,
        country: "india",
        
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;

            setInputdata({ ...inputdata, [name]: value });
    
    }

    console.log(inputdata);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/updateInfo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputdata),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }
            dispatch(updateUserSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(updateUserFailure(error));
        }
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="p-4">
                
                    <div className="Bio">
                        <label className="form-label">Bio</label>
                        <textarea name='bio' className="form-control" rows="5" onChange={handleChange}></textarea>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Birthday</label>
                        <input type="date" name='birth' className="form-control" defaultValue=""  onChange={handleChange} />
                    </div>


                    <div className="form-group">
                        <label className="form-label">Country</label>
                        <select name='country' className="custom-select"  onChange={handleChange}>
                            <option value="usa">USA</option>
                            <option selected value="india">India</option>
                            <option value="uk">UK</option>
                            <option value="germany">Germany</option>
                            <option value="france">France</option>
                        </select>
                    </div>

                    <div className="card-body pb-2">
                        <h6 className="mb-4">Contacts</h6>
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type="text" name='phone' className="form-control" defaultValue=""  onChange={handleChange} />
                        </div>

                    </div>
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



            </form>

        </div>
    );
}

export default EditInfo;

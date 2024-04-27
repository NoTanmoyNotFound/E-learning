import React, { useState } from 'react'
import './ProfileEdit.css';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoStart, userInfoSuccess, userInfoFailure } from "../../../redux/user/localSlice";

const EditSocial = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    console.log(currentUser);
    const [inputdata, setInputdata] = useState({
        userid: currentUser._id,
    });
    const [data , setData] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputdata({ ...inputdata, [name]: value });
    }
    console.log(inputdata);


    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(userInfoStart());
            console.log("ok");
            
            const res = await fetch(`/api/user/updateInfo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputdata),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(userInfoFailure(data.message));
            
                setData("Somthing Wrong");
                return;
            }
            dispatch(userInfoSuccess(data));
            setData("Update success fully");
        }catch (error) {
            console.log(error);
            dispatch(userInfoFailure(error));
            setData(error);
        }

    }


    return (
        <div className='p-4'>



            <from>


                <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input type="text" name='twitter' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input type="text" name='facebook' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" name='linkedin' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input type="text" name='instagram' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Github</label>
                    <input type="text" name='github' className="form-control" defaultValue="" onChange={handleChange} />
                </div>

                <p>{data}</p>

                <div className="form-group flex items-center justify-center p-2 mb-0">
                    <button 
                    
                        type='submit'
                        onClick={handelSubmit}
                        className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md' style={{ backgroundColor: "#26B4FF", transition: "background-color 0.3s" }}
                        onMouseOver={(e) => { e.target.style.backgroundColor = "#FFFFFF"; }}
                        onMouseOut={(e) => { e.target.style.backgroundColor = "#26B4FF"; }}
                    > Submit
                    </button>
                </div>
                {setData && <p>{setData}</p>}
            </from>
        </div>


    )
}

export default EditSocial

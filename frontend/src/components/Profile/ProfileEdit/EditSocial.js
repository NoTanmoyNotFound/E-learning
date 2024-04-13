import React, { useState } from 'react'
import './ProfileEdit.css';

const EditSocial = () => {

    const [inputdata, setInputdata] = useState({


        twitter: "",
        facebook: "",
        google: "",
        linkedIn: "",
        instagram: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputdata({ ...inputdata, [name]: value });
    }
    console.log(inputdata);




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
                    <label className="form-label">Google+</label>
                    <input type="text" name='google' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" name='linkedIn' className="form-control" defaultValue="" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input type="text" name='instagram' className="form-control" defaultValue="" onChange={handleChange} />
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
            </from>
        </div>


    )
}

export default EditSocial

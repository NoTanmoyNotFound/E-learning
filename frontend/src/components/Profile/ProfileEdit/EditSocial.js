import React from 'react'
import './ProfileEdit.css';

const EditSocial = () => {
    return (
        <div className='p-4'>


            <div className="form-group">
                <label className="form-label">Twitter</label>
                <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="form-group">
                <label className="form-label">Facebook</label>
                <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="form-group">
                <label className="form-label">Google+</label>
                <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control" defaultValue="" />
            </div>
            <div className="form-group">
                <label className="form-label">Instagram</label>
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


    )
}

export default EditSocial

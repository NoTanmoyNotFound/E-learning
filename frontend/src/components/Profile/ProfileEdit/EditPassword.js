import React from 'react'
import './ProfileEdit.css';


const EditPassword = () => {
    return (
        <div className='pt-2 pl-4 pr-4 pb-4'>
            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group flex items-center justify-center p-2 mb-0">
                            <button
                                type='submit'
                                className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md'
                            > Submit
                            </button>

                        </div>
            </div>

        </div>
    )
}

export default EditPassword

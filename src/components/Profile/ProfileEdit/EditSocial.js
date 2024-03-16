import React from 'react'
import './ProfileEdit.css';

const EditSocial = () => {
    return (
        <div className='p-4'>
            

            <div className="form-group">
                <label className="form-label">Twitter</label>
                <input type="text" className="form-control" defaultValue="https://twitter.com/user" />
            </div>
            <div className="form-group">
                <label className="form-label">Facebook</label>
                <input type="text" className="form-control" defaultValue="https://www.facebook.com/user" />
            </div>
            <div className="form-group">
                <label className="form-label">Google+</label>
                <input type="text" className="form-control" defaultValue />
            </div>
            <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control" defaultValue />
            </div>
            <div className="form-group">
                <label className="form-label">Instagram</label>
                <input type="text" className="form-control" defaultValue="https://www.instagram.com/user" />
            </div>

        </div>


    )
}

export default EditSocial

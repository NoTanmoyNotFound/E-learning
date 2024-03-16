import React from 'react'
import './ProfileEdit.css';
import { Outlet, Link } from 'react-router-dom';
const EditSidebar = () => {
    return (
        <div>

            <div className="container light-style flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-4 mt-4 ml-3">
                    Account settings
                </h4>
                <div className="card overflow-hidden">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0">
                            <div className="list-group list-group-flush account-settings-links">
                            <Link to="/EditProfile" className="list-group-item list-group-item-action active">General</Link>
                                <Link to="/EditProfile/editinfo" className="list-group-item list-group-item-action">Info</Link>
                                <Link to="/EditProfile/EditSocial" className="list-group-item list-group-item-action">Social links</Link>
                                <Link to="/EditProfile/EditPassword" className="list-group-item list-group-item-action">Change password</Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                            <Outlet/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default EditSidebar;

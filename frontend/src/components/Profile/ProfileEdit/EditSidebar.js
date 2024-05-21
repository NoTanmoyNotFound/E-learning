import React, { useState } from 'react'
import './ProfileEdit.css';
import { Outlet, Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
const EditSidebar = () => {
    const [open, setOpen] = useState(true);

    const navigate = useNavigate();

    const goback = () => {
        navigate("/Profile")

    }
    return (
        <div>

            <div className="container light-style flex-grow-1 container-p-y sm:">

                <h4 className=" flex gap-4 items-center font-weight-bold py-3 mb-4 mt-4 ml-3">
               <HiArrowNarrowLeft className=' w-7 h-7 border border-black-dark rounded-md' onClick={goback} /> Account settings
                </h4>
                <div className="carde overflow-hidden rounded-[20px]">
                    <div className="rowed no-gutters row-bordered row-border-light sm:flex sm:flex-row">
                        <div className={`border-e-slate-950 col-md-3 pt-0 ${open ? ' w-64' : ' w-16'} `}>
                        {/* <BsArrowLeftShort className={` bg-white text-dark-purple text-3xl rounded-full ml-52 mt-3 border border-dark-purple cursor-pointer ${!open && " rotate-180 ml-11"} duration-300`} onClick={() => setOpen(!open)} /> */}
                            <div className="list-group list-group-flush account-settings-links">
                            <Link to="/EditProfile" className={`list-group-item list-group-item-action active ${!open && " hidden"}`}>General</Link>
                                <Link to="/EditProfile/editinfo" className={`list-group-item list-group-item-action ${!open && " hidden"}`}>Info</Link>
                                <Link to="/EditProfile/EditSocial" className={`list-group-item list-group-item-action ${!open && " hidden"}`}>Social links</Link>
                                <Link to="/EditProfile/EditPassword" className={`list-group-item list-group-item-actionc ${!open && " hidden"}`}>Change password</Link>
                            </div>
                        </div>
                        <div className="col-md-9 w-2/3 p-6">
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

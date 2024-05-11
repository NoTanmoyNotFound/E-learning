import React from 'react';
import { Link } from 'react-router-dom';
import './Banned.css';
import Bannedd from "./banned.gif"

const Banned = () => {
    return (
        <div className='restric_main'>
            <div className="restric_inner">
                <div className="rest_img">
                    <img src={Bannedd} alt="Banned GIF" />
                </div>
                <div className="desc_rest">
                    <h1 className='primaryText'>Access Restricted</h1>
                    <p className='orangeText'>You do not have permission to view the videos on this server. Please contact the administrator if you believe this is an error. Or if not, Go and "Login" using valid credentials.</p>
                </div>

                <div className="button_rest button3">
                    <Link className='rest_btn' to="/signin">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Banned;

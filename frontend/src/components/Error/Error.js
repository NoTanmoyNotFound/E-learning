import React from 'react';
import './Error.css';
import { useNavigate, Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error_main'>
            <div className="error_main_inner">
                <div className="inn_err">
                    <div className="err_img">
                        <img src="./error_img2.png" alt="" />
                    </div>

                    <div className="desc">
                        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores optio obcaecati tenetur? Ea, consequatur odit. sit amet consectetur adipisicing elit. Odit fugiat autem sint, modi fuga ratione!</p>
                        <Link to="/" className="home_btnn button mt-4">
                            <Link to="/">Back To Home</Link>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Error

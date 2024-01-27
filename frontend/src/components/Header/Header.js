import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className='h-wrapper'>
                <div className="flexCenter paddings innerWidth h-container">

                    <img src="./logo.png" alt="logo" width={100} />

                    <div className="flexCenter h-menu">
                        <a href="">Recidencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>

                        <button className='button bg-slate-500'>
                            <a href="">Login</a>
                        </button>

                        <button className='button bg-slate-500'>
                            <a href="">Sign In</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;

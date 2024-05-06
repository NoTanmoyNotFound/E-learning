import React, { useState, useEffect } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';


// for outside menu hiden ------------->
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

const Header = ({ onButtonClick }) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user)
    console.log(currentUser);

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return {
                right: menuOpened ? "8%" : "-100%",
                display: menuOpened ? 'flex' : 'none',
            };

        }
        return {};
    }

    const hndeleClick = () => {
        navigate("/signin")

    }

    return (
        <div>
            <section className='h-wrapper'>
                <div className="flexCenter paddings innerWidth h-container">
                   
                    <img src="./logo.png" alt="logo" width={100} />
                    


                    <OutsideClickHandler
                        onOutsideClick={() => setMenuOpened(false)}
                    >
                        <div className="flexCenter h-menu"
                            style={getMenuStyles(menuOpened)}
                        >
                            <Link to="/">Home</Link>
                            <Link to="/allCourses">Courses</Link>
                            <Link to="/careersuport">Career Support</Link>
                            <Link to="/Homeblogs">Blogs</Link>
                            <Link to="/Contact">Contact Us</Link>
                            

                            <Link to={currentUser && currentUser ? (currentUser.role === 'super_admin' ? '/superadmin' : (currentUser.role === 'teacher' ? '/techerDashbord' : '/profile')) : '/signin'} >
                                {currentUser && currentUser ? (
                                    <img src={currentUser.profilePicture} alt="profilepic" className='h-9 w-9 rounded-full object-cover' />
                                ) : (
                                    <button className='opbut' onClick={hndeleClick}>Sign In</button>
                                )}
                            </Link>








                        </div>
                    </OutsideClickHandler>


                    {/* menu handle 'Saklin'----------- */}
                    <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;

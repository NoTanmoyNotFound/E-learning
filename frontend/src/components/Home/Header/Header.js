import React, { useState, useEffect } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import { useNavigate , Link} from 'react-router-dom';
 
import { useSelector } from 'react-redux';


// for outside menu hiden ------------->
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

const Header = ({ onButtonClick }) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.user)

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

                            <a href="allCourses">Courses</a>
                            <a href="">Career Support</a>
                            <a href="Homeblogs">Blogs</a>
                            <a href="">Contact Us</a>
                            <Link to="/superadmin">
                                {currentUser && currentUser.role === 'super_admin' ? (
                                    <a href="">Super Admin</a>
                                ): null}
                            </Link>

                            <Link to="/Profile">
                                {currentUser ? (
                                    <img src={currentUser.profilePicture} alt="profilepic" className=' h-9 w-9 rounded-full object-cover' />
                                ) : (
                                    <button className='opbut'>Sign In</button>
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

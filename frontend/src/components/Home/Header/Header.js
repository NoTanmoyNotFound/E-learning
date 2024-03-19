import React, { useState ,useEffect} from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

// for outside menu hiden ------------->
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import Login from '../../Auth/Login';

const Header = ({onButtonClick}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: menuOpened ? "8%" : "-100%" ,
            display: menuOpened ? 'flex' : 'none',};
            
        }
        return {};
    }

    const modelButton = () => {
        setModalShow(true)
        onButtonClick && onButtonClick();
    }








    // useEffect(() => {
    //     // Add event listener to handle body scroll when the menu is open
    //     document.body.style.overflowX = menuOpened ? 'hidden' : 'auto';

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         document.body.style.overflowX = 'auto';
    //     };
    // }, [menuOpened]);
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
                            <a href="superadmin">Super Admin</a>

                         
                            <Button variant="primary" onClick={modelButton}>
                                Login
                            </Button>

                            <Login 
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
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
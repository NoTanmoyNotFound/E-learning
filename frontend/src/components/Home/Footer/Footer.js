import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">


            {/* left side ------------- */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                {/* some description ---- */}
                <span className="secondaryText">
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Reiciendis quaerat labore atque
                </span>

                {/* footer icons ---- */}
                <span className="flexCenter f-icon">
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-discord"></i></a>
                </span>

                <span className='secondaryText copyRight' style={{color:'black', fontWeight:'500', fontSize:'1rem'}}>
                    All <strong style={{color:'purple'}}>©</strong> Copyrights Claimed by ReadX
                </span>
            </div>

            {/* middle-1 ----------- */}
            <div className="flexColStart f-middle">
                <span className='primaryText'>Online Platform</span>
                <span className='secondaryText'>About</span>
                <span className='secondaryText'>Courses</span>
                <span className='secondaryText'>Instructor</span>
                <span className='secondaryText'>Events</span>
                <span className='secondaryText'>Instructor Profile</span>
                <span className='secondaryText'>Purchase Guide</span>
            </div>


            {/* middle-1 ----------- */}
            <div className="flexColStart f-middle">
                <span className='primaryText'><a href="">Links</a></span>
                <span className='secondaryText'><Link to="/">Home</Link></span>
                <span className='secondaryText'><Link to="/allCourses">Courses</Link></span>
                <span className='secondaryText'><Link to="/careersuport">Support</Link></span>
                <span className='secondaryText'><Link to="/Homeblogs">Blogs</Link></span>
                <span className='secondaryText'><Link to="/signin">Log In</Link></span>
                <span className='secondaryText'><Link to="/Contact">Contact Us</Link></span>
            </div>




            {/* right side --------- */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'><i class="fa-solid fa-house"></i> 700126 kolkata, Barasat, West Bengal</span>
                <span className='secondaryText'><i class="fa-solid fa-phone"></i> 700-9999-001</span>
                <span className='secondaryText'><i class="fa-solid fa-envelope"></i> readx533@gmail.com</span>
                
                <div className="flex search-bar" style={{opacity:'0'}}>
                <input type="text" name="" id="" placeholder='Contact Us'/>
                <button className='button'>Send</button>
                </div>
                

                {/* menu footer-------------------------------------------------------------------------------'Saklin'--- */}
                <div className="flexCenter f-menu">
                        <span><Link to="/">Home</Link></span>
                        <span><Link to="/allCourses">Courses</Link></span>
                        <span><Link to="/careersuport">Career Support</Link></span>
                        <span><Link to="/Homeblogs">Blogs</Link></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;

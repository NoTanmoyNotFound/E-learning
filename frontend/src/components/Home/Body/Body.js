import React from 'react';
import CountUp from "react-countup";
import './Body.css';
import {motion} from 'framer-motion';

import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <section className="body-wrapper">
            <div className="paddings innerWidth flexCenter body-container ">

                {/* left side--------------------------------------- */}
                <div className="flexColStart body-left">

                    {/* Heading with animation ------------------------------------ */}
                    <div className="body-title">
                        <motion.h1
                        initial={{y:"2rem", opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            duration:2,
                            type:"spring"
                        }}
                        >
                            Unlock Your <br />
                            Potential with <br />
                            Read X
                        </motion.h1>
                    </div>

                    {/* description----------------------- */}
                    


                    {/* search bar---------------------- */}
                    <div className="flexCenter search-bar">
                        {/* <input style={{ border: 'none', outline: 'none' }} type="text" placeholder="Search..." /> */}
                        <div><Link to='/allCourses' className="button3">Our Courses</Link></div>
                        <div><Link to='/Homeblogs' className="button3">Blogs</Link></div>
                    </div>

                    {/* admin buttons ------------------ */}
                        




                    {/* numbers counting ------------------------------------------------'Saklin'------------------------- */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter start">
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1.3rem'}}>
                                <CountUp start={88000} end={90000} duration={300}/>
                                <span style={{color:'#E3D888' , fontWeight:'460', fontSize:'1.3rem'}} className='plusIcon'>+</span>
                            </span>
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1rem'}}>Premium Courses</span>
                        </div>

                        <div style={{marginLeft:'1rem'}} className="flexColCenter start">
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1.3rem'}}>
                                <CountUp start={1500} end={2500} duration={30}/>
                                <span style={{color:'#E3D888' , fontWeight:'460', fontSize:'1.3rem'}} className='plusIcon'>+</span>
                            </span>
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1rem'}}>Happy Customer</span>
                        </div>


                        <div style={{marginLeft:'1rem'}} className="flexColCenter start">
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1.3rem'}}>
                                <CountUp start={1300} end={2380} duration={30}/>
                                <span style={{color:'#E3D888' , fontWeight:'460', fontSize:'1.3rem'}} className='plusIcon'>+</span>
                            </span>
                            <span className='sptext' style={{fontWeight:'500', fontSize:'1rem'}}>Cirtification</span>
                        </div>
                    </div>
                </div>




                {/* right side--------------------------------------- */}
                <div className="flexCenter body-right">
                    <motion.div
                    initial={{x:"7rem", opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                    className="image-container">
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Body;

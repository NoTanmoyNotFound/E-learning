import React from 'react';
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2"

const Contact = () => {
    return (
        <section className="c-wrapper ml-4">
            <div className="paddings innerWidth flexCenter c-container">


                {/* left side----------------------- */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Temporibus voluptatibus <br /> voluptatum aut sapiente quaerat, totam quis.</span>



                    {/* sub sections------ */}
                    <div className="flexColStart contactModes">


                        {/* first row */}
                        <div className="flexStart row">

                            {/* call mode  */}
                            <div className="flextColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 8999 345</span>
                                    </div>
                                </div>


                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>

                            {/* chat mode  */}
                            <div className="flextColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 8999 345</span>
                                    </div>
                                </div>


                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>


                        {/* second row */}
                        <div className="flexStart row">

                            {/* video-call mode  */}
                            <div className="flextColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call Now</span>
                                        <span className='secondaryText'>021 8999 345</span>
                                    </div>
                                </div>


                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>

                            {/* message mode  */}
                            <div className="flextColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 8999 345</span>
                                    </div>
                                </div>


                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side ----------------------- */}
                <div className="c-right">
                    <div className="image-container">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;

import React from 'react'
import './Main_Course2.css'

const Main_Course2 = () => {
    return (
        <section className="Main_Course2">
            <div className="main_inner2">

                {/* course view start */}
                <div className="course_main2">
                    <div className="video_section_main">
                        <video src="./demoVid.mp4" controls ></video>
                    </div>

                    <div className="main_heading_courseName">
                        <hr />
                        <h2 className='primaryText head_course'>Java Tutorial || For Beginners || Best Course</h2>
                        <p className="whiteText desc_course">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi similique perferendis harum id eius culpa aliquam voluptatum fugit pariatur sunt!</p>
                        <hr />
                    </div>

                    <div className="main_teacher_name_and_profile">
                        <div className="pppp">
                            <img src="./teacher.jpg" alt="" width={70} />
                            <div className="teacher_name2_email">
                                <div className="t_inner">
                                    <p className='t_name2'>Saklin Mustak</p>
                                    <p className='t_email2'>saklin@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="duratio2">
                            <p className='d22'>Course Duration</p>
                            <p className='d33'><i className="fa-regular fa-clock"></i>&nbsp;30 h</p>
                        </div>

                        <div className="likes2">
                            <div className="likes2_inner">
                                <button className="btnLinkes2"><i className="fa-regular fa-thumbs-up"></i></button>
                                <span className="likeCount2">2.3K</span>
                                <button className="btnLinkes23"><i className="fa-regular fa-thumbs-down"></i></button>
                                <span className="likeCount2">566</span>
                            </div>
                        </div>

                        <div className="test_main2">
                            <a href="#" className='butTest'>EXAM</a>
                        </div>
                    </div>
                </div>
                {/* course view end */}


                {/* comments main start */}
                <div className="comment_main2">
                    <div className="comment_inner2">
                        <div className="cmm_head2">
                            <p className='primaryText'><i className="fa-regular fa-comments"></i>&nbsp; Comments:</p>
                            <p className='primaryText'>&nbsp;8.3K+</p>
                        </div>


                        <div className="main_all_comm">
                            <div className="main_comm_inner">

                                <div className='overFlow-set'>
                                    {/* single comment start */}
                                    <div className="bg-2">
                                        <div className="each_comm2">
                                            <img src="./s.png" alt="" />
                                            <p className='each_name'>Saklin Mustak</p>
                                        </div>
                                        <div className="desc_review">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus voluptatem deserunt non eius impedit, in, hic, recusandae eum dolorum voluptate. Reiciendis dicta dolorum, delectus eligendi laborum corporis sunt itaque?</p>
                                        </div>
                                    </div>
                                    {/* single comment end */}

                                    {/* single comment start */}
                                    <div className="bg-2">
                                        <div className="each_comm2">
                                            <img src="./s.png" alt="" />
                                            <p className='each_name'>Saklin Mustak</p>
                                        </div>
                                        <div className="desc_review">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus voluptatem deserunt non eius impedit, in, hic, recusandae eum dolorum voluptate. Reiciendis dicta dolorum, delectus eligendi laborum corporis sunt itaque?</p>
                                        </div>
                                    </div>
                                    {/* single comment end */}

                                    {/* single comment start */}
                                    <div className="bg-2">
                                        <div className="each_comm2">
                                            <img src="./s.png" alt="" />
                                            <p className='each_name'>Saklin Mustak</p>
                                        </div>
                                        <div className="desc_review">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus voluptatem deserunt non eius impedit, in, hic, recusandae eum dolorum voluptate. Reiciendis dicta dolorum, delectus eligendi laborum corporis sunt itaque?</p>
                                        </div>
                                    </div>
                                    {/* single comment end */}
                                </div>

                                <div className="comment_send_main">
                                    <textarea className='textArea' name="" id="" placeholder='Give a comment'></textarea>
                                    <button className='button3 button333'>Send Comment</button>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
                {/* comments main end */}



                {/* floating btn start */}
                <button className="floating-btn">
                    <a href="/Allcourses">
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                </button>
                {/* floating btn end */}

            </div>
        </section>
    )
}

export default Main_Course2

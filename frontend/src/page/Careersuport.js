import React from 'react'
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';
import figar from './assets/newok.png'
import company from './assets/company.webp'
import linkprof from './assets/excelerate-cv-review.jpg'
import convasation from './assets/excelerate-interview-session.jpg'
import interview from './assets/excelerate-career-mentoring.jpg'
import saminer from './assets/saminer.jpg'
import hacathon from './assets/hackathon.jpg'
import fewcomp from './assets/nwtwork.png'
import { useNavigate } from 'react-router-dom';





function Careersuport() {
 const navigate = useNavigate();

    const handelClick = () => {

        navigate("/careerform")
    
    }
    return (
        <>
            <Header />
            <div className='md:px-32 p-4 pt-1 max-w-screen-2xl mx-auto mt-1 md:mt-3 '>
                <div className='md:p-9 rounded-br-[80px] px-4 py-9 rounded-3xl' style={{ background: "linear-gradient(90deg, #EE9AE5 0%, #5961F9 100%)" }}>
                    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                        <div className='lg:pr-20 md:pr-0'>
                            <img src={figar} alt="pic" width={300} />
                        </div>


                        <div className='md:w-3/5'>
                            <h1 className='text-5xl text-white font-bold'>Achieve your career dreams with RX Excelerate</h1>
                            <p className='text-white text-xl mt-5'>At SkillEnable, we offer comprehensive career support to our students by providing expert guidance to help them understand the latest trends in various industries and improve their resumes. </p>
                            <p className='text-white text-xl mt-3'>Through dedicated mentorship, we help prepare them for job interviews and stand out in the job market</p>
                        </div>

                    </div>
                </div>


            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <p className=' mb-7 text-center text-4xl font-bold text-black'>Our 550+ Authorised Hiring Partners</p>
                <img src={company} alt="company" />

            </div>

            {/* main content */}
            <div className='px-20 flex flex-col'>
                <div className=' flex md:flex-row sm:flex-col justify-between items-center mt-10'>
                    <div className=' w-3/5'>
                        <h1 className='text-4xl font-bold text-black'>Career Prepparation</h1>
                        <p className='text-black text-lg mt-3'>Learn from leading academicians in the field of data science and business analytics and several experienced industry practitioners from top organizations.</p>
                    </div>
                    <div className=' sm:mt-10 rounded-xl shadow-2xl lg:w-[260px]  h-[100px]flex flex-col justify-center text-center items-center p-10' style={{ backgroundColor: "#fcd984" }}>
                        <h1 className='text-4xl font-bold'>4.5/5</h1>
                        <p className='text-black text-lg mt-1'>Average Mentorship Rating</p>
                    </div>
                </div>

                <div className=' mt-10'>
                    <button type='submit' onClick={handelClick} className=' w-80 h-[57px] rounded-xl shadow-2xl bg-[#0a43e1] text-xl text-white'>Get Counseling Call</button>
                </div>

                <div className='mt-10'>

                    <div className='flex flex-col md:flex-row sm:flex-col gap-10 lg:gap-20  sm:gap-10 items-center mt-10'>
                        <div>
                            <img src={convasation} alt="sigaminta" className='rounded-xl' />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-black'>1 : 1 Career mentoring</h1>
                            <ul className='list-disc'>
                                <li> <p className='text-black text-lg mt-3'>1:1 LIVE online sessions with experienced industry professionals</p></li>
                                <li> <p className='text-black text-lg mt-3'>Expert mentors guide you on the career path that's right for you</p></li>
                                <li> <p className='text-black text-lg mt-3'>Suggestions on setting your short term and long term career goals</p></li>
                                <li> <p className='text-black text-lg mt-3'>Mentors from various domains help you gain valuable industry insights</p></li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row sm:flex-col gap-10 lg:gap-20 sm:gap-10  items-center mt-10'>
                        <div >
                            <img src={linkprof} alt="sigaminta" className='rounded-xl' />
                        </div>
                        <div className='lg:w-[636px] sm:w-[350px]'>
                            <h1 className='text-3xl font-bold text-black'>CV/LinkedIn Review</h1>
                            <ul className='list-disc'>
                                <li> <p className='text-black text-lg mt-3'>Feedback from experts to make your resume and LinkedIn profiles stand out from the crowd</p></li>
                                <li> <p className='text-black text-lg mt-3'>Personalized and detailed suggestions to improve the content and format of your CV</p></li>
                                <li> <p className='text-black text-lg mt-3'>Tips on customizing your resume for the job profile you are applying to</p></li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row sm:flex-col gap-10 lg:gap-20 sm:gap-10 items-center mt-10'>
                        <div>
                            <img src={interview} alt="sigaminta" className='rounded-xl' />
                        </div>
                        <div className='lg:w-[636px] sm:w-[350px]'>
                            <h1 className='text-3xl font-bold text-black'>Interview Preparation Session</h1>
                            <ul className='list-disc'>
                                <li> <p className='text-black text-lg mt-3'>1:1 mock interviews with industry experts to help you land your dream job</p></li>
                                <li> <p className='text-black text-lg mt-3'>Guidance from our alumni currently in roles you aspire for</p></li>
                                <li> <p className='text-black text-lg mt-3'>Develop industry context with case studies and learn answers to common technical and HR questions</p></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

{/* last section  */}

            <div className='py-10 px-28 mt-11 flex flex-col' style={{ backgroundColor: "#dddcf1" }}>
                <div className='flex flex-col md:flex-row sm:flex-col gap-10 lg:gap-20 justify-between  sm:gap-10 items-center mt-10'>
                   
                    <div >
                        <h1 className='text-3xl font-bold text-black'>Networking sessions - GL Confluence</h1>
                        <ul className='list-disc'>
                            <li> <p className='text-black text-lg mt-3'>Connect with like minded professionals</p></li>
                            <li> <p className='text-black text-lg mt-3'>Grow your professional network</p></li>
                        </ul>
                        <div className='mt-10'>
                        <img src={fewcomp} alt="other" width={370} />
                       </div>
                    </div>


                    <div>
                        <img src={saminer} alt="sigaminta" className='rounded-xl' />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row sm:flex-col gap-10 lg:gap-20 justify-between  sm:gap-10 items-center mt-10'>
                   
                    <div className='lg:w-[570px] sm:w-[360px]'>
                        <h1 className='text-3xl font-bold text-black'>Hackathons & Live Projects</h1>
                        <ul className='list-disc'>
                            <li> <p className='text-black text-lg mt-3'>Participate in hackathons sponsored by top companie</p></li>
                            <li> <p className='text-black text-lg mt-3'>Build industry experience that will be relevant to your future job</p></li>
                            <li> <p className='text-black text-lg mt-3'>Take part in live projects organised by companies such as Mahindra Logistics, Wysa, Bajaj Allianz</p></li>
                            <li> <p className='text-black text-lg mt-3'>Work on real-world problems that'll add value to your resume</p></li>
                        </ul>
                    </div>


                    <div>
                        <img src={hacathon} alt="sigaminta" className='rounded-xl' />
                    </div>

                </div>

            </div>







            <Footer />

        </>
    )
}

export default Careersuport

import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With ReadX</span>
                <span className='secondaryText'>"Embark on your reading journey with ReadX! Dive into a world of knowledge and adventure by signing up today. Explore curated content, discover new perspectives, and unlock endless possibilities. Get started with ReadX and let your reading experience flourish!"</span>

                
                {/* button ------------------------------------------------------------------------------------------------------------------------'Saklin'------------------------ */}
                <button className="btn-grad">
                    <Link to="/careersuport">Get Started</Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;

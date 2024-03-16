import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With ReadX</span>
                <span className='secondaryText'>Choose Your Best Career Oppotunity <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium repellat amet sequi nam voluptatem minima assumenda veniam. Voluptatem, unde?</span>

                
                {/* button ------------------------------------------------------------------------------------------------------------------------'Saklin'------------------------ */}
                <button className="btn-grad">
                    <a href="">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;

import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from "./slider.json";
import { sliderSettings } from './common';
import "./Bestcourses.css"

const Bestcourses = () => {
    return (
        <section className="b-wrapper mt-5">
            <div className="paddings innerWidth b-container">
                <div className="b-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Courses</span>
                </div>
            </div>

            {/* slider------------------------------------------ */}
            <Swiper {...sliderSettings}>
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="flexColStart b-card ">
                            <img src={card.img} alt="#" />
                            <span className="secondaryText b-price">
                                <span style={{ color: 'orange' }}>Rs: </span>
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.details}</span>
                        </div>
                    </SwiperSlide>
                ))}

                {/* buttons slider 'Saklin'----------------------- */}
                <SliderButtons />
            </Swiper>
        </section>
    );
}

export default Bestcourses;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flexCenter b-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
}

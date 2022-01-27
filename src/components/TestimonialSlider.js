import React, { useState } from 'react';
import {TestimonialData} from '../TestimonialData';

function TestimonialSlider() {

    const [activeSlide,setactiveSlide]=useState(TestimonialData[0].slide)

    const sliderWidth={
        width:`calc(450px * ${TestimonialData.length})`
    }

    const handlesliderDot=(e)=>{
        let innerslider=document.querySelector(".inner-slider");
        // console.log(typeof(e.target.id));
        let slideWidth=document.querySelectorAll(".slide")[0].clientWidth
        innerslider.style.transition=`${0.2 * Math.abs(parseInt(e.target.id) - activeSlide)}s`
        innerslider.style.transform=`translateX(-${(slideWidth + 50)*(parseInt(e.target.id)-1)}px)`
        setactiveSlide(parseInt(e.target.id));
        
    }

    const handleSlideRight=()=>{
        console.log("hello")
        let innerslider=document.querySelector(".inner-slider");
        let slideWidth=document.querySelectorAll(".slide")[0].clientWidth
        innerslider.style.transition=`0.2s`
        innerslider.style.transform=`translateX(-${(slideWidth + 50) * activeSlide}px)`
        setactiveSlide(activeSlide+1)
    }

    const handleSlideleft=()=>{
        let innerslider=document.querySelector(".inner-slider");
        let slideWidth=document.querySelectorAll(".slide")[0].clientWidth
        innerslider.style.transition=`0.2s`
        innerslider.style.transform=`translateX(-${(slideWidth + 50) * (activeSlide-2)}px)`
        setactiveSlide(activeSlide-1)
    }

  return (
    <div className='slider mt-md-5'>
        <div className="inner-slider d-flex" style={sliderWidth}>
            {TestimonialData.map((e)=>{
                return (
                    <div className={activeSlide===e.slide?'active-slide slide':'slide'} key={e.slide}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="profile d-flex align-items-center">
                                <img src="./images/slider2.png" alt="" className='profile-img' / >
                                <div className='ms-3'>
                                    <p className='person-name mb-0'>{e.personName}</p>
                                    <span className='person-location'>{e.location}</span>
                                </div>
                            </div>
                            <div className="stars">{e.star} <img src="./images/star.png" alt="" /> </div>
                        </div>
                        <p>{e.msg}</p>
                    </div>
                )
            })}
        </div>
        <div className="slider-controls d-flex justify-content-between align-items-center mt-md-5 px-4">
            <div className="slider-dots d-flex">
                {TestimonialData.map((e)=>{
                    return <div className={activeSlide===e.slide?'active-slider-dot slider-dot':'slider-dot'} id={e.slide} key={e.slide} onClick={handlesliderDot}></div>
                })}
            </div>
            <div className="d-flex">
                <button className='left-slide-btn mx-2' onClick={handleSlideleft} disabled={activeSlide===1?true:""}><i className="fas fa-arrow-left"></i></button>
                <button className='right-slide-btn mx-2' onClick={handleSlideRight} disabled={activeSlide===TestimonialData.length?true:""}><i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
  );
}

export default TestimonialSlider;

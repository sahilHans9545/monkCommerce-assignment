import React from 'react';

function Hero() {
  return (
  <div className='Hero row py-md-5 justify-content-between flex-md-row flex-sm-column-reverse align-items-center '>
        <div className="col-lg-5 col-md-7">
            <h1 className='mt-3 section-heading'>Want anything to be easy with LaslesVPN.</h1>
            <p className='mt-4'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button className='mt-md-4 mt-3 primary-bg' id='get_started'>Get Started</button>
        </div>
        <div className="col-lg-6 col-md-5 mt-3 mt-md-0">
            <img src="./images/Hero.svg" alt="" className='img-fluid ' />
        </div>
  </div>
  );
}

export default Hero;

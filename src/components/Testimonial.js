import React from 'react';
import TestimonialSlider from './TestimonialSlider';

function Testimonial() {
  return (
      <div className='py-md-5 py-3 testimonial-section'>
            <div className="col-md-5 mx-auto text-center">
                <h2 className='section-heading'>Trusted by Thousands of Happy Customer</h2>
                <p className='mt-3'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <TestimonialSlider/>
      </div>
  );
}

export default Testimonial;

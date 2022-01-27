import React from 'react';
import Plans from './Plans';

function Chooseplan() {
  return (
      <div id='choose-plan' className=' text-center py-md-5 py-3'>
            <div className="col-md-5 mx-auto mt-3">
                <h2 className='section-heading'>Choose Your Plan</h2>
                <p className='mt-3'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>

            <Plans/>
      </div>
  );
}

export default Chooseplan;

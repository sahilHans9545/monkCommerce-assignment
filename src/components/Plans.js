import React from 'react';
import plansData from '../PlansData'

function Plans() {
    console.log(plansData)
  return (
      <div className='plans d-lg-flex mt-md-5 mt-3'>
            {plansData.map((e)=>{
                return (
                    <div className='plan-container text-center mt-3 mt-lg-0 mx-auto' key={e.id}>
                        <div><img src={`./images/${e.imageName}`} alt="" /></div>
                        <p className='mt-3 plan-type'><strong>{e.type}</strong></p>
                        <ul className='mt-5 p-0'>
                            {e.advantages.map((advantages)=>{
                                return <li className='d-flex' key={Math.random()}><img src="./images/greenCheck.png" alt="" /> <span className='ms-3'>{advantages}</span></li>
                            })}
                        </ul>
                        <div className='price_Select'>
                            <p className='plan-price'>{e.price===0?<span><strong>Free</strong></span>:<span><strong>${e.price}</strong>/mo</span>}</p>
                            <div className='select-plan-btn d-flex'>
                                <input type="radio" id={e.id} name="plan" checked/>
                                <label htmlFor={e.id}>Select</label>
                            </div>
                        </div>
                    </div>
                )
            })}
      </div>
  );
}

export default Plans;

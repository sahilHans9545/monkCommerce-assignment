import React from 'react';
import {Footerdata} from "../FooterData";

function Footer() {
    console.log(Footerdata)
  return (
    <div className='footer px-md-5 px-3 py-5'>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="site-logo">
                    <img src="./images/logo.png" alt="" />
                    <span className='ms-2'>Lasles<strong>VPN</strong></span>
                </div>
                <p className='mt-3'><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
            </div>
            <div className="col-md-6 d-flex flex-wrap justify-content-evenly">
                {Footerdata.map((e)=>{
                    return (
                        <div key={e.id} className='col-6 col-md-auto'>
                            <p className='mb-0'><strong>{e.heading}</strong></p>
                            <ul className='mt-3'>
                                {e.points.map((point)=>{
                                    return <li key={Math.random()}>{point}</li>
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default Footer;

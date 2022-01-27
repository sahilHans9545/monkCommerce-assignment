import React, { useEffect } from 'react';

function Navbar(props) {

  useEffect(()=>{
    const menuBar=document.querySelector(".menu-bar");
    menuBar.addEventListener("click",()=>{
        document.querySelector(".mobile-menu-items").classList.toggle("d-block")
    })
  },[])

  return (
      <div className='navbar py-4 d-flex px-2 px-lg-0'>

        <div className='d-flex justify-content-between col-12 col-md-auto'>
          <div className="site-logo">
              <img src="./images/logo.png" alt="" />
              <span className='ms-2'>Lasles<strong>VPN</strong></span>
          </div>
          <div className='menu-bar d-md-none d-block'><i className="fas fa-bars"></i></div>
        </div>
        
        <div className=' d-md-flex align-items-center mobile-menu-items'>
        <div className='nav-menus'>
          <ul className='d-md-flex d-block mb-0'>
              {props.menu.map((e)=>{
                return <li className='nav-item px-md-4' key={e[1]}><a href="">{e[0]}</a></li>
              })} 
          </ul>
        </div>
        
      
        <div className="sign-btns">
          <button className='btn mx-1'>Sign in</button>
          <button className='btn mx-1'>Sign up</button>
        </div>

      </div>

      </div>
  );
}

export default Navbar;

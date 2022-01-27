import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import Chooseplan from './components/Chooseplan';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';


function App() {
  return (
  <>
    <div className='container'>
        <Navbar menu={[["Pricing",1],["Testimonials",2]]} />
        <Hero/>
        <Chooseplan/>
        <Testimonial/>
    </div>
    
    <Footer/>
  

  </>
  );
}

export default App;

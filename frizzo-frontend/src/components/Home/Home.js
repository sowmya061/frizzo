// Home.js
import React from 'react';
import './Home.css';
import Header from './Header';
import Contact from './Contact';
import Explore from './Explore';
//import landing_page from '../images/landing_page.png';
//import alt1 from '../images/alt1.png';
import alt2 from '../images/alt2.png';


function Home() {
  return (
    <div>
      <Header />
      <div id='home-section' className='landing-section'>
        <div className='landing-text'>
          <p>Take control of your finances</p>
          <div className='landing-des'>
            <span>Achieve your financial goals with easy budget tracking and management on our website</span>
          </div>
          <div className='landing-btns'>
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
        </div>
        <div className='landing-img'>
          <img src={alt2} alt='landing'></img>
        </div>
      </div>

      <div id='explore-section' className='explore-section'>
        <Explore/>
      </div>

      <div id='contact-section'>
        <Contact />
      </div>
    </div>
  );
}

export default Home;

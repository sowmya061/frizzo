import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import Contact from './Contact';
import Explore from './Explore';
import alt2 from '../images/alt2.png';
import axios from 'axios'; // Import Axios

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = async () => {
    try {
      // Example of a POST request to signup endpoint
      const response = await axios.post(SIGNUP_URL, {
        username: 'exampleUsername',
        password: 'examplePassword'
      });

      console.log('Signup response:', response.data);
      navigate('/login'); // Navigate to login page after signup
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      // Handle error scenario
    }
  };

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
            <button onClick={handleGetStarted}>Get Started</button>
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

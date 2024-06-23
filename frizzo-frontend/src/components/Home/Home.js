import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [navSelected, setNavSelected] = useState('Home');

  const handleNavClick = (value) => {
    setNavSelected(value);
  };

  return (
    <div>
      <Link to="/"></Link>
      <div className='home-nav'>
        <div className='home-nav-logo'>Logo</div>
        <div className='home-nav-el'>
          <a 
            className={navSelected === 'Home' ? 'active' : ''}
            onClick={() => handleNavClick('Home')}
          >
            Home
          </a>
          <a 
            className={navSelected === 'Transactions' ? 'active' : ''}
            onClick={() => handleNavClick('Transactions')}
          >
            Transactions
          </a>
          <a 
            className={navSelected === 'Budget Planning' ? 'active' : ''}
            onClick={() => handleNavClick('Budget Planning')}
          >
            Budget Planning
          </a>
          <a 
            className={navSelected === 'Resources and Investments' ? 'active' : ''}
            onClick={() => handleNavClick('Resources and Investments')}
          >
            Resources and Investments
          </a>
          <a 
            className={navSelected === 'Contact Us' ? 'active' : ''}
            onClick={() => handleNavClick('Contact Us')}
          >
            Contact Us
          </a>
          <a 
            className={navSelected === 'Login' ? 'active' : ''}
            onClick={() => handleNavClick('Login')}
          >
            Login
          </a>
        </div>
      </div>
      <div>
        Take control of your finances
      </div>
    </div>
  );
}

export default Home;

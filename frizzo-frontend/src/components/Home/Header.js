import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [navSelected, setNavSelected] = useState('Home');

  const handleNavClick = (value) => {
    setNavSelected(value);
  };

  return (
    <div className='home-nav'>
      <div className='home-nav-logo'>Logo</div>
      <div className='home-nav-el'>
        <a
          className={navSelected === 'Home' ? 'active' : ''}
          onClick={() => handleNavClick('Home')}
          href='#home-section'
        >
          HOME
        </a>
        <a
          className={navSelected === 'Resources and Investments' ? 'active' : ''}
          onClick={() => handleNavClick('Resources and Investments')}
          href='#explore-section'
        >
          EXPLORE
        </a>
        <a
          className={navSelected === 'Contact Us' ? 'active' : ''}
          onClick={() => handleNavClick('Contact Us')}
          href='#contact-section'
        >
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Header;

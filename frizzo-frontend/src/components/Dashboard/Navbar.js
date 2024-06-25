import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className='frizzo-logo'></div>
      <div className='nav-el-container'>
        <ul className='nav-elements'>
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className='nav-row'
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link;
                toggleSidebar(); 
              }}
            >
              <div className='nav-icon'>{val.icon}</div>
              <div className='nav-title'>{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

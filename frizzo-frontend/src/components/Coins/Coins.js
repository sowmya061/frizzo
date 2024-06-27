import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import '../Dashboard/style.css';
import '../Dashboard/Navbar.css';
import Coins_main from './Coins_main';


function Coins() {
  return (
    <div className="dashboard">
      <Link to="/coins"></Link>
      <div className="content">
        <div className="nav-bar"><Navbar/></div>
        <div className="main-content"><Coins_main/></div>
      </div>
    </div>
  );
}

export default Coins;

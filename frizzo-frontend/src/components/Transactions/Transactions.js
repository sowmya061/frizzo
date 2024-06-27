import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import '../Dashboard/style.css';
import '../Dashboard/Navbar.css';
import Transaction_main from './Transaction_main';


function Transactions() {
  return (
    <div className="wrapper">
      <Link to="/transactions"></Link>
      <div className="content">
        <div className="nav-bar"><Navbar/></div>
        <div className="main-content"><Transaction_main/></div>
      </div>
    </div>
  );
}

export default Transactions;

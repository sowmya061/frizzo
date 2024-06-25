import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './style.css';
import Dash_main from './Dash_main';

function Dashboard() {
  return (
    <div className="wrapper">
      <Link to="/dashboard"></Link>
      <div className="content">
        <div className="nav-bar"><Navbar/></div>
        <div className="main-content"><Dash_main/></div>
      </div>
    </div>
  );
}

export default Dashboard;

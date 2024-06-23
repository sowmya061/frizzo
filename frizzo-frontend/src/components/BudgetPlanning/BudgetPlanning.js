import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import '../Dashboard/style.css';
import '../Dashboard/Navbar.css';
import Budget_main from './Budget_main';

function BudgetPlanning() {
  return (
    <div className="dashboard">
      <Link to="/budgeting"></Link>
      <div className="content">
        <div className="nav-bar"><Navbar/></div>
        <div className="main-content"><Budget_main/></div>
      </div>
    </div>
  );
}

export default BudgetPlanning;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import BudgetPlanning from './components/BudgetPlanning/BudgetPlanning';
import Coins from './components/Coins/Coins';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgeting" element={<BudgetPlanning />} />
          <Route path="/coins" element={<Coins/>} />


        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
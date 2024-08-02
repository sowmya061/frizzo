import React from 'react';
import './signup.css'; 

const SignUp = () => {
  return (
    <main className="main-content">
      <div className="form-container">
        <h2>Signup</h2>
        <form action="/signup" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Enter your Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
          </div>
          <button type="submit" className="submit-btn">Signup</button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;

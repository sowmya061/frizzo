import React from 'react';
import './login.css';

const Login = () => {
  return (
    <main className="main-content">
      <div className="form-container">
        <h2>Login</h2>
        <form action="/login" method="post">
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
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </main>
  );
};

export default Login;

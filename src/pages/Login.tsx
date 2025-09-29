import React from 'react'
import wallchiLogo from '../assets/react.svg';
import './login.css';
const Login = () => {
    return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Login / Sign Up</h2>

        <label className="signup-label">Your Mobile Number</label>
        <div className="input-wrapper">
          <span className="prefix">+91</span>
          <input type="text" className="signup-input" placeholder="Enter number" />
        </div>

        <button className="signup-btn">Proceed</button>

        <div className="signup-footer">
          <img src={wallchiLogo} alt="Wallchi Logo" className="signup-logo" />
        </div>
      </div>
    </div>
  );
}

export default Login

import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Access to our dashboard</p>
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-field password-field">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-password-button"
          >
            👁
          </button>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot Password?</a>
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        <p className="or-separator">OR</p>
        <div className="social-login-buttons">
          <button className="social-login-button facebook-button">
            Login with Facebook
          </button>
          <button className="social-login-button google-button">
            Login with Google
          </button>
        </div>
        <p className="register-link">
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

// src/components/users/SignInForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css'; // Import the CSS file for SignInForm styling

const SignInForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here using credentials state
    console.log('Signing in with credentials:', credentials);
    // Example: Navigate to another page after sign-in
    navigate('/dashboard');
  };

  return (
    <div className="signin-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import './UserForm.css'; // Import the CSS file for UserForm styling

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.createUser(user)
      .then((response) => {
        navigate('/users'); // Navigate back to the user list after successful creation
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="user-form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary" >
          <a href="/signin" onClick={(e) => { e.preventDefault(); navigate('/signin'); }}>
           Create
          </a>
          </button>
        </div>
      </form>
      <div className="signin-group">
        <p>
          Already have an account?{' '}
          <a href="/signin" onClick={(e) => { e.preventDefault(); navigate('/signin'); }}>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserForm;

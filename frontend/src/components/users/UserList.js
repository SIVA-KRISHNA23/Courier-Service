import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';
import './UserList.css'; // Ensure the path is correct

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const handleDelete = (id) => {
    UserService.deleteUser(id)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="user-list">
      <div className="container">
        <div className="header">
          <h2>Users</h2>
          <div className="buttons">
            <Link to="/users/new" className="btn btn-primary">Create New User</Link>
            <Link to="/users/show" className="btn btn-secondary">Show All Users</Link>
          </div>
        </div>
        <div className="user-items">
          {users.map((user) => (
            <div className="user-item" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <div className="actions">
                <Link to={`/users/${user.id}/edit`} className="edit-link">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

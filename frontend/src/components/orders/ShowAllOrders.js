import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderService from '../../services/OrderService';
import './ShowAllOrders.css';

const ShowAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderService.getAllOrders().then((response) => {
      setOrders(response.data);
    }).catch(error => {
      console.error("There was an error fetching the orders!", error);
    });
  }, []);

  const handleDelete = (id) => {
    OrderService.deleteOrder(id).then(() => {
      setOrders(orders.filter(order => order.id !== id));
    }).catch(error => {
      console.error("There was an error deleting the order!", error);
    });
  };

  return (
    <div className="show-all-orders">
      <div className="container">
        <h2>All Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.description}</td>
                <td>{order.status}</td>
                <td>
                  <div className="actions">
                    <Link to={`/orders/${order.id}/edit`} className="edit-link">Edit</Link>
                    <button onClick={() => handleDelete(order.id)} className="delete-button">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllOrders;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderService from '../../services/OrderService';
import './OrderList.css'; // Ensure the path is correct

const OrderList = () => {
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
    <div className="order-list">
      <div className="container">
        <div className="header">
          <h2>Orders</h2>
          <div className="buttons">
            <Link to="/orders/new" className="btn btn-primary">Create New Order</Link>
            <Link to="/show-all-orders" className="btn btn-secondary">Show All Orders</Link>
          </div>
        </div>
        <div className="order-items">
          {orders.map((order) => (
            <div className="order-item" key={order.id}>
              <h3>{order.description}</h3>
              <p>Status: {order.status}</p>
              <div className="actions">
                <Link to={`/orders/${order.id}/edit`} className="edit-link">Edit</Link>
                <button onClick={() => handleDelete(order.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;

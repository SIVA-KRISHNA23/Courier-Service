import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OrderService from '../../services/OrderService';
import Modal from 'react-modal';
import './OrderForm.css';
import './Modal.css'; // Importing the modal CSS

Modal.setAppElement('#root');

const OrderForm = () => {
  const [order, setOrder] = useState({ id: null, description: '', status: 'pending' });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      OrderService.getOrderById(id).then((response) => {
        setOrder(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      OrderService.updateOrder(id, order).then(() => {
        setModalIsOpen(true);
      });
    } else {
      OrderService.createOrder(order).then(() => {
        setModalIsOpen(true);
      });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/orders');
  };

  const goToOrders = () => {
    setModalIsOpen(false);
    navigate('/orders');
  };

  return (
    <div className="order-form-container">
      <h2>{id ? 'Edit Order' : 'Create Order'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={order.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={order.status}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Order Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Thanks for placing the order!</h2>
        <div className="modal-buttons">
          <button onClick={closeModal} className="btn btn-primary">Close</button>
          <button onClick={goToOrders} className="btn btn-secondary">Go to Orders</button>
        </div>
      </Modal>
    </div>
  );
};

export default OrderForm;

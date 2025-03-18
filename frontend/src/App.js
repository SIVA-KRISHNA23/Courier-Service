// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow'; // Import the slideshow component
import Home from './components/Home';
import About from './components/About';
import OrderList from './components/orders/OrderList';
import OrderForm from './components/orders/OrderForm';
import UserList from './components/users/UserList';
import UserForm from './components/users/UserForm';
import ShowAllOrders from './components/orders/ShowAllOrders'; // Import the new component
import ShowAllUsers from './components/users/ShowAllUsers';
import StatusForm from './components/status/StatusForm'; // Import the status form component
import SignInForm from './components/users/SignInForm';
import './App.css';

// Define your slideshow images with correct paths
const slideshowImages = [
  '/images/background.jpg',
  '/images/background2.jpg',
  '/images/background3.jpg',
];

function App() {
  return (
    <Router>
      <BackgroundSlideshow images={slideshowImages} /> {/* Ensure correct paths here */}
      <Header />
      <div className="main-content">
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orders/new" element={<OrderForm />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/new" element={<UserForm />} />
            <Route path="/orders/:id/edit" element={<OrderForm />} /> {/* Route for editing an order */}
            <Route path="/show-all-orders" element={<ShowAllOrders />} /> {/* Add new route */}
            <Route path="/users/show" element={<ShowAllUsers />} />
            <Route path="/users/:id/edit" element={<UserForm />} />
            <Route path="/status" element={<StatusForm />} /> {/* Add route for status form */}
            <Route path="/signin" element={<SignInForm/>} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

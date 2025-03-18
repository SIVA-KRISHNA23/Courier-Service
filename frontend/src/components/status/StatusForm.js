// src/components/status/StatusForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './StatusForm.css'; // Import CSS file for styling

const StatusForm = () => {
  const [id, setId] = useState('');
  const [order, setOrder] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!id) newErrors.id = 'ID is required';
    if (!order) newErrors.order = 'Order is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Handle form submission, e.g., sending data to the server
    console.log({ id, order });
    
    // Navigate to another page or show a success message
    navigate('/status/submitted');
  };

  return (
    <Container className="status-form-container">
      <Typography variant="h4" align="center" gutterBottom>
        Order Status
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          error={!!errors.id}
          helperText={errors.id}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          error={!!errors.order}
          helperText={errors.order}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="submit-button"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default StatusForm;

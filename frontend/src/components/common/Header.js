// src/components/common/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3', padding: '0 10px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ marginRight: '20px' }}>
            <img src={logo} alt="Logo" style={{ height: 60 }} />
          </Link>
          <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
            Home
          </Typography>
          <Typography variant="h6" component={Link} to="/about" sx={{ color: '#fff', textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
            About
          </Typography>
          <Typography variant="h6" component={Link} to="/orders" sx={{ color: '#fff', textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
            Orders
          </Typography>
          <Typography variant="h6" component={Link} to="/users" sx={{ color: '#fff', textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
            Users
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

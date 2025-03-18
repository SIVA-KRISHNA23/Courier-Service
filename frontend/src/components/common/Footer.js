// src/components/common/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'; // Relative path import

const Footer = () => {
  return (
    <Box className="footer">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Online Courier Service. All rights reserved.
      </Typography>
      <div className="social-icons">
        <IconButton href="#" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="#" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default Footer;

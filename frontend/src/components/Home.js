// src/components/Home.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import BackgroundImage from '../assets/images/background.jpg'; // Import your background image

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '20px',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ marginBottom: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3rem' }}>
            Welcome to our Courier Service App!
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '40px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', fontSize: '1.5rem' }}>
            We deliver reliability and speed, right at your fingertips.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: '#f9f9f9', // Light background color for the content section
          paddingTop: '80px', // Adjust as needed to offset the fixed header height
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Track Orders
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Easily track the status of your orders in real-time.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" color="primary" variant="contained" href="/status">
                    Track Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Manage Users
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    View, add, and edit user profiles easily.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" color="primary" variant="contained" href="/users">
                    Manage Users
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Place Orders
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Seamless order placement with integrated payment options.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" color="primary" variant="contained" href="/users/new">
                    Place Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;

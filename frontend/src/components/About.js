// src/components/About.js

import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import classNames from 'classnames';
import styles from './About.module.css'; // Import CSS Module

function About() {
  return (
    <Container className={classNames(styles.sectionContainer)} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className={classNames(styles.sectionHeading)}>
        About Us
      </Typography>
      <Typography variant="body1" className={classNames(styles.sectionContent)}>
        Welcome to our online courier service. We aim to provide the best service for managing your deliveries efficiently and effectively. Our team is dedicated to ensuring your parcels reach their destinations reliably and on time.
      </Typography>
      <Grid container justifyContent="center" spacing={3} mt={4}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classNames(styles.styledPaper)}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2">
              To deliver excellence in every package, ensuring customer satisfaction with every delivery.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classNames(styles.styledPaper)}>
            <Typography variant="h6" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body2">
              To be the leading courier service provider, recognized for our reliability and customer-centric approach.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classNames(styles.styledPaper)}>
            <Typography variant="h6" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body2">
              Integrity, reliability, and customer satisfaction drive everything we do.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;

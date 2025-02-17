import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333', // Dark background
        color: '#FFFFFF', // White text
        py: 4, // Vertical padding
        px: 2, // Horizontal padding
        mt: 8, // Margin at the top
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We specialize in transforming seismic data management systems with innovative and secure solutions.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              About Us
            </Link>
            <Link href="/services" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Services
            </Link>
            <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">Email: Info@seismicshift.net</Typography>
          <Typography variant="body2">Phone: +1 (832)-458-1208</Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Seismic Shift. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

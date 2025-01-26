// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)', // Adds a blur effect for better readability
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above other components
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#FFFFFF' }}
        >
          Your Logo
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: '#FFFFFF' }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about" sx={{ color: '#FFFFFF' }}>
            About Us
          </Button>
          <Button color="inherit" component={RouterLink} to="/services" sx={{ color: '#FFFFFF' }}>
            Services
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact" sx={{ color: '#FFFFFF' }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
 
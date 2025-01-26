// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        paddingX: { xs: 2, sm: 10 }, // Responsive horizontal padding
        zIndex: 2, // Above the overlay and video
        position: 'relative', // Establish stacking context
      }}
    >
      <Box
        sx={{
          maxWidth: '32rem', // 512px
          color: '#FFFFFF',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            fontSize: { xs: '1.875rem', md: '3rem' }, // Responsive font sizes
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for visibility
          }}
        >
          Revolutionizing Seismic Data Management
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            whiteSpace: 'nowrap',
            fontSize: { xs: '1.125rem', md: '1.25rem' }, // Responsive font sizes
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Text shadow for visibility
          }}
        >
          A leader in modernizing data storage solutions for the oil and gas industry.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;

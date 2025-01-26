// src/pages/Home.jsx
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0, // Ensures the video starts from the top-left corner
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Places video behind overlay and content
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rigs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Enhanced Text Visibility */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          zIndex: 1, // Places overlay above the video
        }}
      />

      {/* Hero Section */}
      <HeroSection />
    </Box>
  );
};

export default Home;

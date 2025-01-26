// src/pages/About.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '50vh',
  backgroundImage: 'url(/datacenter.jpg)', // Ensure the image is placed in the public folder
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  [theme.breakpoints.down('sm')]: {
    height: '30vh',
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          About Us
        </Typography>
      </HeroSection>

      {/* Content Sections */}
      <Container maxWidth="md">
        <ContentSection>
          <Grid container spacing={4}>
            {/* Who We Are */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="body1" paragraph>
                  At Seismic Shift, we specialize in transforming legacy seismic data storage systems into secure,
                  scalable, and efficient solutions. With over 25 years of experience in the oil and gas industry,
                  we’re committed to helping organizations streamline their data workflows and modernize their
                  infrastructure.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Mission */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  We’re dedicated to revolutionizing seismic data management by converting outdated storage mediums—
                  ranging from hard disks to optical tapes—into secure, scalable cloud-based, or on-prem solutions.
                  Through innovation, security, and customer focus, we empower clients to unlock the full potential
                  of their geological data, driving smarter, more sustainable energy solutions.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Vision */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  To lead the industry in seismic data accessibility by enabling organizations to seamlessly
                  transition to modern, secure, and efficient storage solutions. Our goal is to ensure long-term
                  innovation, reliability, and operational excellence in a data-driven world.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Core Values */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Core Values
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Integrity</Typography>
                    <Typography variant="body2">
                      Transparency, trust, and accountability in everything we do.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Excellence</Typography>
                    <Typography variant="body2">
                      Rigorous data validation and seamless project execution.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Customer Focus</Typography>
                    <Typography variant="body2">
                      Tailored solutions that empower organizations to meet their goals confidently.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Security</Typography>
                    <Typography variant="body2">
                      Advanced protocols to safeguard sensitive data.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Innovation</Typography>
                    <Typography variant="body2">
                      Leveraging cutting-edge technology to modernize seismic data storage.
                    </Typography>
                  </Grid>
                </Grid>
              </SectionPaper>
            </Grid>
          </Grid>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default About;

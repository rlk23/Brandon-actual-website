import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material"; // Ensure List and ListItem are imported
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Hero Section Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: 'url(/OilRig.jpg)', // Ensure this image is in the public folder
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const Services = () => {
  const tapeMigrations = [
    {
      title: "Tape Cataloging & Organization",
      description:
        "Detailed inventory and organization of all tapes to be migrated.",
      image: "/cataloging.jpg", // Replace with an actual image path
    },
    {
      title: "Tape to Cloud Migration",
      description:
        "Migration to major cloud providers like AWS, GCP, and Azure, with secure data transfer.",
      image: "/cloud-migration.jpg", // Replace with an actual image path
    },
    {
      title: "Tape to On-Prem Migration",
      description:
        "Secure and efficient data movement to customer-owned on-premises storage.",
      image: "/on-prem.jpg", // Replace with an actual image path
    },
  ];

  const nonTapeMigrations = [
    {
      title: "On-Premises Data Migration",
      description:
        "Seamless migration from servers, NAS, and SAN to cloud or other on-premises storage.",
      image: "/on-prem-migration.jpg", // Replace with an actual image path
    },
    {
      title: "Cloud-Based Solutions",
      description:
        "Secure storage tiers like Glacier for infrequent access and S3 for frequent access.",
      image: "/cloud-based.jpg", // Replace with an actual image path
    },
    {
      title: "Customer Cloud Environments",
      description:
        "Migration to customer-managed cloud environments with provided credentials.",
      image: "/customer-cloud.jpg", // Replace with an actual image path
    },
  ];

  const benefits = [
    {
      key: "Reduced Costs",
      value: "Lower operational costs associated with tape storage and management.",
    },
    {
      key: "Improved Agility",
      value: "Increased flexibility and scalability with cloud-based data storage.",
    },
    {
      key: "Enhanced Security",
      value: "Robust cloud security features to safeguard sensitive data.",
    },
    {
      key: "Increased Efficiency",
      value: "Streamlined access and faster retrieval times for seismic data.",
    },
    {
      key: "Modernization",
      value: "Transition to a cutting-edge data storage infrastructure that supports future business growth.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          Our Services
        </Typography>
      </HeroSection>

      {/* Tape Migrations Section */}
      <Container maxWidth="lg">
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Tape Migrations
          </Typography>
          <Grid container spacing={4}>
            {tapeMigrations.map((migration, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={migration.image}
                    alt={migration.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {migration.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {migration.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContentSection>

        {/* Non-Tape Migrations Section */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Non-Tape Migrations
          </Typography>
          <Grid container spacing={4}>
            {nonTapeMigrations.map((migration, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={migration.image}
                    alt={migration.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {migration.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {migration.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContentSection>

        {/* Key Benefits Section with Accordion */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Key Benefits
          </Typography>
          {benefits.map((benefit, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleAccordionChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{benefit.key}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{benefit.value}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </ContentSection>
      </Container>
    </Box>
  );
};

export default Services;

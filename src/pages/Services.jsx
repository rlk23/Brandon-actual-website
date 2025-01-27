import React, { useState, useRef } from "react";
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
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Hero Section Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: "url(/OilRig.jpg)", // Ensure this image is in the public folder
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

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto", // Allow manual horizontal scrolling
  gap: theme.spacing(4),
  "&::-webkit-scrollbar": {
    display: "none", // Hide scrollbar for aesthetics
  },
}));

const CarouselItem = styled(Card)(({ theme }) => ({
  minWidth: "300px", // Fixed width for carousel cards
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": { transform: "translateY(-8px)" },
}));

const Services = () => {
  const carouselRef = useRef(null);
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const combinedServices = [
    {
      title: "Tape Cataloging & Organization",
      description:
        "Detailed inventory and organization of all tapes to be migrated.",
      image: "/cataloging.jpg",
    },
    {
      title: "Tape to Cloud Migration",
      description:
        "Migration to major cloud providers like AWS, GCP, and Azure, with secure data transfer.",
      image: "/cloud-migration.jpg",
    },
    {
      title: "Tape to On-Prem Migration",
      description:
        "Secure and efficient data movement to customer-owned on-premises storage.",
      image: "/on-prem.jpg",
    },
    {
      title: "Media Independence",
      description:
        "Support for a wide range of media types: 3590, 3592, LTO1–LTO9, hard disks, USB drives, optical media.",
      image: "/media-independence.jpg",
    },
    {
      title: "Tape Cleanup & Disposal",
      description:
        "Secure tape storage and disposal services (e.g., shredding, destruction). Data validation and fail-back options with tape retention.",
      image: "/tape-cleanup.jpg",
    },
  ];

  const nonTapeMigrations = [
    {
      title: "On-Premises Data Migration",
      description:
        "Seamless migration from servers, NAS, and SAN to cloud or other on-premises storage.",
      image: "/on-prem-migration.jpg",
    },
    {
      title: "Cloud-Based Solutions",
      description:
        "Secure storage tiers like Glacier for infrequent access and S3 for frequent access.",
      image: "/cloud-based.jpg",
    },
    {
      title: "Customer Cloud Environments",
      description:
        "Migration to customer-managed cloud environments with provided credentials.",
      image: "/customer-cloud.jpg",
    },
  ];

  const benefits = [
    { key: "Reduced Costs", value: "Lower operational costs associated with tape storage and management." },
    { key: "Improved Agility", value: "Increased flexibility and scalability with cloud-based data storage." },
    { key: "Enhanced Security", value: "Robust cloud security features to safeguard sensitive data." },
    { key: "Increased Efficiency", value: "Streamlined access and faster retrieval times for seismic data." },
    { key: "Modernization", value: "Transition to a cutting-edge data storage infrastructure that supports future business growth." },
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          Our Services
        </Typography>
      </HeroSection>

      <Container maxWidth="lg">
        {/* Introduction Section */}
        <ContentSection>
          <Typography variant="h4" align="center" gutterBottom>
            Comprehensive Solutions for Seismic Data Management
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            Explore our range of tape and non-tape migration services tailored
            to your business needs. Modernize your data storage and improve
            operational efficiency.
          </Typography>
          <Divider sx={{ my: 4 }} />
        </ContentSection>

        {/* Carousel Section */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Tape Migrations
          </Typography>
          <CarouselContainer ref={carouselRef}>
            {combinedServices.map((service, index) => (
              <CarouselItem key={index}>
                <CardMedia
                  component="img"
                  height="160"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContainer>
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

        {/* Key Benefits Section */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Key Benefits
          </Typography>
          {benefits.map((benefit, index) => (
            <Accordion
              key={index}
              expanded={expandedAccordion === index}
              onChange={handleAccordionChange(index)}
              sx={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
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

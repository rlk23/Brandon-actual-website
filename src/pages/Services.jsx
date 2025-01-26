import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import { FiCheckCircle } from "react-icons/fi";
import { styled } from "@mui/system";

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
  const sections = [
    {
      title: "Tape Migrations",
      items: [
        "Tape Cataloging & Organization: Detailed inventory and organization of all tapes to be migrated.",
        "Assessment of required tape devices and estimation of migration timelines.",
      ],
    },
    {
      title: "Tape to Cloud Migration",
      items: [
        "Migration to major cloud providers: AWS, GCP, and Azure.",
        "Data extraction, validation, and secure transfer to the chosen cloud platform.",
        "Integration with existing cloud infrastructure and applications.",
        "Implementation of data management strategies in the cloud (e.g., classification, retention, disaster recovery).",
      ],
    },
    {
      title: "Tape to On-Prem Migration",
      items: [
        "Secure and efficient data movement to customer-owned on-premises storage locations.",
      ],
    },
    {
      title: "Media Independence",
      items: [
        "Support for a wide range of media types: 3590, 3592, LTO1–LTO9, hard disks, USB drives, optical media.",
      ],
    },
    {
      title: "Tape Cleanup & Disposal",
      items: [
        "Secure tape storage and disposal services (e.g., shredding, destruction).",
        "Data validation and fail-back options with tape retention.",
      ],
    },
    {
      title: "Non-Tape Migrations",
      items: [
        "On-Premises Data Migration: Seamless migration of data from various on-premises storage systems (e.g., servers, NAS, SAN) to cloud or other on-premises locations.",
        "Cloud-Based Solutions:",
        "Seismic Shift Cloud: Secure and easily accessible cloud environment for data storage.",
        "Options for various storage tiers (e.g., Glacier for infrequent access, S3 for frequent access).",
        "Customer Cloud Environments: Migration to customer-managed cloud environments using provided credentials.",
      ],
    },
  ];

  const benefits = [
    "Reduced Costs: Lower operational costs associated with tape storage and management.",
    "Improved Agility: Increased flexibility and scalability with cloud-based data storage.",
    "Enhanced Security: Robust cloud security features to safeguard sensitive data.",
    "Increased Efficiency: Streamlined access and faster retrieval times for seismic data.",
    "Modernization: Transition to a cutting-edge data storage infrastructure that supports future business growth.",
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          Our Services
        </Typography>
      </HeroSection>

      {/* Services Section */}
      <Container maxWidth="md">
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Comprehensive Solutions for Seismic Data Management
          </Typography>
          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              <List>
                {section.items.map((item, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <FiCheckCircle color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </ContentSection>

        {/* Key Benefits Section */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Key Benefits
          </Typography>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FiCheckCircle color="#1976d2" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default Services;

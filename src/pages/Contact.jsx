import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from "emailjs-com";

// Hero Section Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: "url(/contacts.jpg)", // Ensure the image is placed in the public folder
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  borderRadius: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const AnimatedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const SERVICE_ID = "";  // Replace with your EmailJS Service ID
const TEMPLATE_ID = "";  // Replace with your EmailJS Template ID
const USER_ID = "";  // Replace with your EmailJS User ID

const ContactUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          Contact Us
        </Typography>
      </HeroSection>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 8, minHeight: "100vh" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: isMobile ? "center" : "left", mb: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We'd love to hear from you. Please fill out the form, and we'll
                get back to you as soon as possible.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <ContactInfoItem>
                  <FiMail size={24} />
                  <Box>
                    <Typography variant="body1">Info@seismicshift.net</Typography>
                  </Box>
                </ContactInfoItem>
                <ContactInfoItem>
                  <FiPhone size={24} />
                  <Box>
                    <Typography variant="body1">832-458-1208</Typography>
                  </Box>
                </ContactInfoItem>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <AnimatedTextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      aria-label="Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <AnimatedTextField
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      variant="outlined"
                      aria-label="Company Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <AnimatedTextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      aria-label="Email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <AnimatedTextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      aria-label="Phone Number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedTextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      variant="outlined"
                      aria-label="Address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedTextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      aria-label="Message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 2,
                        height: 56,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #1976D2 30%, #00BCD4 90%)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUsPage;

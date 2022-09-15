import { Box } from "@mui/material";
import React from "react";
import About from "../../components/screens/frontpage/About";
import ContactUs from "../../components/screens/frontpage/ContactUs";
import Footer from "../../components/screens/frontpage/Footer";
import Hero from "../../components/screens/frontpage/Hero";
import HowItWorks from "../../components/screens/frontpage/HowItWorks";
import Navbar from "../../components/screens/frontpage/Navbar";
import back from "../../components/screens/frontpage/images/back.png";
const FrontPage = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${back})`,
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <Box>
      <Box className={styles.paperContainer}>
        <Navbar />
      </Box>

      <Box>
        <Hero />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <HowItWorks />
      </Box>
      <Box>
        <ContactUs />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default FrontPage;

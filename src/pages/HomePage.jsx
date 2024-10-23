// This is a static page mocking an "About Us" section for our fake user data

import React, { useEffect, useState } from "react";
import Services from "../components/Services";
import About from "../components/About";
import Values from "../components/Values";
import Portfolio from "./PortfolioPage";
import Contact from "./ContactPage";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll handler to update the scrollY position
  const handleScroll = () => {
    setScrollY(window.scrollY || window.pageYOffset);
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Pass scrollY as a prop to each component */}
      <About scrollY={scrollY} />
      <Services scrollY={scrollY} />
      <Values scrollY={scrollY} />
    </div>
  );
};

export default HomePage;

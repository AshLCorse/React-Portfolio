import React, { useEffect, useState } from "react";
import WebsiteDesign from "./WebsiteDesign";
import WebAppDesign from "./WebAppDesign";
import EcommerceDesign from "./EcommerceDesign";
import OtherPrograms from "./OtherPrograms";

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to update the scroll position
  const handleScroll = () => {
    const windowScrollY = window.scrollY || window.pageYOffset;
    setScrollY(windowScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, []);

  return (
    <div>
      {/* Pass the scrollY prop to each child component */}
      <WebsiteDesign scrollY={scrollY} />
      <WebAppDesign scrollY={scrollY} />
      <EcommerceDesign scrollY={scrollY} />
      <OtherPrograms scrollY={scrollY} />
    </div>
  );
};

export default ServicesProvided;

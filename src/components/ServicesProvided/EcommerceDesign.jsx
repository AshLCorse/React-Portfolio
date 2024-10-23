import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/assets/css/HeroImageRight.module.css";
import { Link } from "react-router-dom";

const EcommerceDesign = ({ scrollY }) => {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/SoundHealing.JPG')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Let the container adjust its height dynamically
        position: "relative",
        overflowY: "auto", // Allow vertical scrolling when content overflows
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div
            className={classes.content}
            style={{
              transform: `translateY(${scrollY * -0.25}px)`, // Apply dynamic parallax effect
              marginTop: "300px",
              transition: "transform 0.2s ease-out", // Smooth transition for parallax
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>
                E-Commerce Web App Design
              </span>
            </Title>

            <Text className={classes.description} mt={30}>
              A dynamic E-commerce web app is a website that dynamically
              generates content based on user input. A shopping site like Amazon
              or Temu is an example of a dynamic E-commerce web app.
            </Text>
            <Link to="/contact">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Contact me to recieve a free estimate!
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EcommerceDesign;

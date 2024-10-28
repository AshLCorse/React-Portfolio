import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/assets/css/HeroImageRight.module.css";
import { Link } from "react-router-dom";

const OtherPrograms = () => {
  return (
    <div
      className={classes.root}
      // style={{
      //   backgroundImage: `url('../assets/images/SoundHealing.JPG')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "100vh", // Let the container adjust its height dynamically
      //   position: "relative",
      //   overflowY: "auto", // Allow vertical scrolling when content overflows
      //   overflowX: "hidden", // Prevent horizontal overflow
      // }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div
            className={classes.content}
            // style={{
            //   transform: `translateY(${scrollY * -0.25}px)`, // Apply dynamic parallax effect
            //   marginTop: "300px",
            //   transition: "transform 0.2s ease-out", // Smooth transition for parallax
            // }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>
                Other Programming Solutions
              </span>
            </Title>

            <Text className={classes.description} mt={30}>
              I also offer other options, such as Website Maintinence, Back End
              Development, Content management and other Database design and
              management programs for personal and business use. A Database
              Management Command Line Interface example is in my portfolio under
              "Employee Tracker".
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

export default OtherPrograms;

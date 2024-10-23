import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/assets/css/HeroImageRight.module.css";

const MyValues = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/Values.JPG')`,
        backgroundSize: "cover", // Ensures the image covers the whole div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating
        position: "relative", // To contain absolutely positioned elements
      }}
    >
      <Container
        size="lg"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          className={classes.inner}
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            className={classes.content}
            style={{
              transform: `translateY(${scrollY * -0.25}px)`, // Gives the content a parallax effect
              marginTop: "400px", // Adjust as needed
            }}
          >
            <Title className={classes.title}>
              {" "}
              <span className={classes.gradientText}>Ashleigh Corse</span>{" "}
            </Title>
            <Text className={classes.description} mt={30}>
              I am a passionate and dedicated web developer with a background in
              full stack web design. My goal is to help you create engaging and
              user-friendly websites that meet your business needs.
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Quality</h2>
              As a skilled and experienced web developer, I strive to create
              high-quality websites that meet your needs and deliver exceptional
              user experience.
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Innovation</h2>I am always looking for new ideas and
              technologies to expand my knowlege, improve the quality of my work
              and meet your business needs.
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Reliability</h2>I am committed to providing reliable and
              secure services to my clients, ensuring that your website is
              accessible and safe for everyone.
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Passion</h2>I am driven by a passion for web development and
              the ability to create meaningful and engaging experiences for my
              clients. I want to solve the puzzles and problems facing you!
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Honesty</h2>I believe in the power of honesty and transparency
              in my work. I will guide every customer through their options, and
              help you get the best website for your business!
            </Text>
            <Text className={classes.description} mt={30}>
              <h2>Leadership</h2>I am always looking for opportunities to teach
              others and help them find the right solution for their situation.
              I lead by example, and I will show you how I build your solution.
              😊
            </Text>
            <Link to="/portfolio">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                View my portfolio!
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Contact me for a free estimate!
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyValues;

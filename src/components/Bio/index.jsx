import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/assets/css/HeroImageRight.module.css";
const Bio = () => {
  return (
    <div
      className={classes.root}
      style={{
        marginTop: "30vh",
        backgroundImage: `url('../assets/images/Bio.JPG')`,
        backgroundSize: "cover", // Ensures the image covers the whole div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating
        position: "relative", // To contain absolutely positioned elements
        height: "100vh", // Ensure the image covers the whole div
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.gradientText}>Bio</span> for Ashleigh
              Corse
            </Title>

            <Text className={classes.description} mt={30}>
              Ashleigh is a creative, who expresses life as an art form, through
              exploring nature playfully and practice in martial arts, puzzles,
              music, and meditation. She seeks to create innovative solutions
              for modern problems, and inspire a space where people feel safe to
              be authentic. Her journey began with robotics; she began coding in
              college finding personal growth and comuunity. She continued on to
              trade school and fell in love with Web Apps, in part due to the
              diverse problem solving involved that inspires her. Ashleigh
              studied at an online bootcamp through Denver University for the
              past 6 months, developing her skills and practicing as a
              programmer and developer. The skills she learned here are
              showcased on her portfolio. Her path led to further study in
              Javascript, including frameworks such as Next.js, Vue.js,
              Svelte.js, Nuxt.js, and Angular. She\’s done multiple training
              sessions through Udemy, Khan Academy, and LinkedIn Learning. She
              now offers custom websites and web apps, in addition to other
              programming solutions. She values creating a sense of community in
              practice can help us all to find our gifts and grow into our
              fullest expression of our authentic selves. By offering free
              estimates and consultations, Ashleigh hopes to provide each
              customer with the best solutions for them.
            </Text>
            <Link to="/portfolio">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bio;

// Bringing in the required import from 'react-router-dom'

import React, { useState, useEffect } from "react";
import { Burger, Popover } from "@mantine/core";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import classes from "@/assets/css/HeroImageRight.module.css";
const Nav = () => {
  const [opened, setOpened] = useState(false); // Track popover open/close state

  function showNavigation() {
    return (
      <ul className="nav-links">
        <li className={`mx-1 ${classes.control}`}>
          <Link to="/">About Me</Link>
        </li>
        <li className={`mx-1 ${classes.control}`}>
          <Link to="/portfolio">My Portfolio</Link>
        </li>
        <li className={`mx-1 ${classes.control}`}>
          <Link to="/resume">My Resume</Link>
        </li>
        <li className={`mx-1 ${classes.control}`}>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className="background-header">
      <div className="overlay">
        <h1 className="site-title">
          <Link to="/">Home</Link>
        </h1>

        {/* Burger button wrapped inside the Popover.Target */}
        <Popover
          opened={opened}
          onClose={() => setOpened(false)} // Close popover when onClose is triggered
          position="bottom" // Popover appears below the burger button
          withArrow={false} // Remove arrow from the popover
          placement="start" // Adjust placement if needed
        >
          <Popover.Target>
            <Burger
              color="white"
              size="md"
              variant="solid"
              className="burger-icon"
              style={{ position: "relative", zIndex: 3 }}
              onClick={() => setOpened((o) => !o)} // Toggle popover
              opened={opened}
              ripple="light"
            />
          </Popover.Target>

          <Popover.Dropdown
            style={{
              backgroundColor: "rgba(44, 62, 80, 0)",
              color: "white",
              border: "none",
              padding: "10px",
            }}
          >
            {showNavigation()}
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
};

export default Nav;

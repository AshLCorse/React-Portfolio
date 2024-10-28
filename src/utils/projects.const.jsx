import { useState } from "react";
//import screenshots from assets folder

import ProfPortfolioScr from "./images/Challenge-2-Professional-Portfolio-Screenshot.png";
import EmplPayrTrckScr from "./images/Challenge-3-Employee-Payroll-Tracker-Screenshot.png";
import PersBlgScr from "./images/Challenge-4-Personal-Blog-Screenshot.png";
import TskBrdScr from "./images/Challenge-5-Task-Board-Screenshot.png";
import ProREADMEGenScr from "./images/Challenge-9-Pro-README-Generator-Screenshot.png";
import SVGGenScr from "./images/Challenge-10-SVG-Generator-Screenshot.png";
import NtTkrScr from "./images/Challenge-11-Note-Taker-Screenshot.png";
import EmpTrckScr from "./images/Challenge-12-Employee-Tracker-Screenshot.png";
import EcommerceScr from "./images/Challenge-13-Ecommerce-Back-End-Screenshot.png";
import TechBlgScr from "./images/Challenge-14-Tech-Blog-Screenshot.png";
import RegexTutScr from "./images/Challenge-17-Regex-Tutorial-Screenshot.png";
import SocNetAPIScr from "./images/Challenge-18-Social-Network-API-Screenshot.png";
import TextEditorScr from "./images/Challenge-19-Text-Editor-Screenshot.png";
import SpiritSeedsScr from "./images/Spirit-Seeds-screenshot.png";

//define each project
const project2 = {
  id: 2,
  title: "Professional Portfolio",
  description:
    "This is my first professional portfolio showcasing my projects and skills.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Portfolio",
  screenshot: ProfPortfolioScr,
};

const project3 = {
  id: 3,
  title: "Employee Payroll Tracker",
  description:
    "This is a simple employee payroll tracker application using React.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Employee-Payroll-Tracker",
  screenshot: EmplPayrTrckScr,
};

const project4 = {
  id: 4,
  title: "Personal Blog",
  description: "This is a simple personal blog application using Web APIs.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Web APIs"],
  githubLink: "https://github.com/ashleighcorse/Personal-Blog",
  screenshot: PersBlgScr,
};

const project5 = {
  id: 5,
  title: "Task Board",
  description:
    "This is a simple task board application using Third Party APIs.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Day.js"],
  githubLink: "https://github.com/ashleighcorse/Task-Board",
  screenshot: TskBrdScr,
};

const project9 = {
  id: 9,
  title: "Pro README Generator",
  description:
    "This is a command-line application that generates a README file based on user input.",
  dependencies: ["Node.js", "Inquirer.js"],
  technologies: ["JavaScript", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Pro-README-Generator",
  screenshot: ProREADMEGenScr,
};

const project10 = {
  id: 10,
  title: "SVG Generator",
  description:
    "This is a simple SVG generator application that uses user input.",
  dependencies: ["Node.js", "Inquirer.js"],
  technologies: ["JavaScript", "Git", "VSCode", "Object-Oriented Programming"],
  githubLink: "https://github.com/ashleighcorse/SVG-simple-Logo-maker",
  screenshot: SVGGenScr,
};

const project11 = {
  id: 11,
  title: "Note Taker",
  description: "This is a simple note-taking application using Local Storage.",
  dependencies: ["Node.js", "Express.js"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Local Storage"],
  githubLink: "https://github.com/ashleighcorse/Note-Taker",
  screenshot: NtTkrScr,
};

const project12 = {
  id: 12,
  title: "Employee Tracker",
  description:
    "This is a simple employee tracker application using MySQL and Sequelize.",
  dependencies: ["Node.js", "PostgreSQL", "Inquirer.js"],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "VSCode",
    "Content Management Systems",
  ],
  githubLink: "https://github.com/ashleighcorse/Employee-Tracker",
  screenshot: EmpTrckScr,
};

const project13 = {
  id: 13,
  title: "Ecommerce Back-End",
  description:
    "This is a simple eCommerce back-end application using Node.js, Express.js, MySQL, and Sequelize.",
  dependencies: ["Node.js", "PostgreSQL", "Sequelize", "Express.js"],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "VSCode",
    "Object-Relational Mapping",
  ],
  githubLink: "https://github.com/ashleighcorse/E-Commerce-Back-End",
  screenshot: EcommerceScr,
};

const project14 = {
  id: 14,
  title: "Tech Blog",
  description:
    "This is a simple tech blog application using Node.js, Express.js, MySQL, and Sequelize.",
  dependencies: [
    "Node.js",
    "Handlebars.js",
    "Sequelize",
    "Express-seesion npm package",
  ],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "VSCode",
    "Model-View-Controller",
    "Render",
  ],
  githubLink: "https://github.com/ashleighcorse/Tech-Blog",
  screenshot: TechBlgScr,
};

const project17 = {
  id: 17,
  title: "Regex Tutorial",
  description:
    "This is a simple regex tutorial gist on Github using JavaScript.",
  dependencies: ["None"],
  technologies: ["JavaScript", "Git", "VSCode", "Computer Science"],
  githubLink:
    "https://gist.github.com/AshLCorse/8c71c2b1a9781b53fe0dbe2671d0b69f",
  screenshot: RegexTutScr,
};

const project18 = {
  id: 18,
  title: "Social Network API",
  description:
    "This is a simple social network API application using Express.js and Mongoose.",
  dependencies: ["Node.js", "MongoDB", "Mongoose", "Express.js"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Insomnia"],
  githubLink: "https://github.com/ashleighcorse/Social-Network-API",
  screenshot: SocNetAPIScr,
};

const project19 = {
  id: 19,
  title: "Text Editor",
  description:
    "This is a PWA Text Editor using idb, Webpack, Workbox, and Babel",
  dependencies: ["Webpack", "Workbox", "Babel"],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "VSCode",
    "Render",
    "Progressive Web Applications",
  ],
  githubLink: "https://github.com/AshLCorse/PWA-Text-Editor",
  screenshot: TextEditorScr,
};

const project20 = {
  id: 20,
  title: "REACT Portfolio",
  description:
    "This is my professional portfolio showcasing my projects and skills.",
  dependencies: ["React", "Bootstrap", "Mantine", "Vite", "Eslint"],
  technologies: ["JavaScript", "React", "Bootstrap"],
  githubLink: "https://github.com/ashleighcorse/React-Portfolio",
  screenshot: ProfPortfolioScr,
};

const project21 = {
  id: 21,
  title: "Spirit Seeds",
  description: "Bootcamp Final Project, a yoga website for my teammate's wife.",
  dependencies: [
    "node.js",
    "express.js",
    "React",
    "Bootstrap",
    "Mantine",
    "Stripe",
    "Vite",
    "Eslint",
    "Axios",
    "JWT",
  ],
  technologies: [
    "React",
    "State",
    "MERN Stack",
    "MongoDB",
    "Render",
    "GraphQL",
    "AWS",
  ],
  githubLink: "https://github.com/ashleighcorse/React-Employee-Tracker",
  screenshot: SpiritSeedsScr,
};

//add more projects here

//link screenshots in projects array
const projects = [
  project21, //add more projects here to add to the portfolio!
  project20,
  project19,
  project18,
  project17,
  project14,
  project13,
  project12,
  project11,
  project10,
  project9,
  project5,
  project4,
  project3,
  project2,
];

export default projects;

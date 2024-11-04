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
const challenge2 = {
  id: 2,
  title: "Professional Portfolio",
  description:
    "This is my first professional portfolio showcasing my projects and skills using basic and advanced CSS.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Portfolio",
  screenshot: ProfPortfolioScr,
};

const challenge3 = {
  id: 3,
  title: "Employee Payroll Tracker",
  description:
    "This is a simple employee payroll tracker application using basic JavaScript.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Employee-Payroll-Tracker",
  screenshot: EmplPayrTrckScr,
};

const challenge4 = {
  id: 4,
  title: "Personal Blog",
  description:
    "This is a simple personal blog application using Web APIs and my first foray into the Document Object Model.",
  dependencies: ["None"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Web APIs"],
  githubLink: "https://github.com/ashleighcorse/Personal-Blog",
  screenshot: PersBlgScr,
};

const challenge5 = {
  id: 5,
  title: "Task Board",
  description:
    "This is a simple task board application using Third Party APIs and my first use of JQuery and Day.js.",
  dependencies: ["None"],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "VSCode",
    "JQuery",
    "Day.js",
  ],
  githubLink: "https://github.com/ashleighcorse/Task-Board",
  screenshot: TskBrdScr,
};

const challenge9 = {
  id: 9,
  title: "Pro README Generator",
  description:
    "This is a command-line application that generates a README file based on user input.",
  dependencies: ["Node.js", "Inquirer.js"],
  technologies: ["JavaScript", "Git", "VSCode"],
  githubLink: "https://github.com/ashleighcorse/Pro-README-Generator",
  screenshot: ProREADMEGenScr,
};

const challenge10 = {
  id: 10,
  title: "SVG Generator",
  description:
    "This is a simple SVG generator application that uses user input.",
  dependencies: ["Node.js", "Inquirer.js"],
  technologies: ["JavaScript", "Git", "VSCode", "Object-Oriented Programming"],
  githubLink: "https://github.com/ashleighcorse/SVG-simple-Logo-maker",
  screenshot: SVGGenScr,
};

const challenge11 = {
  id: 11,
  title: "Note Taker",
  description: "This is a simple note-taking application using Local Storage.",
  dependencies: ["Node.js", "Express.js"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Local Storage"],
  githubLink: "https://github.com/ashleighcorse/Note-Taker",
  screenshot: NtTkrScr,
};

const challenge12 = {
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

const challenge13 = {
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

const challenge14 = {
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

const challenge17 = {
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

const challenge18 = {
  id: 18,
  title: "Social Network API",
  description:
    "This is a simple social network API application using Express.js and Mongoose.",
  dependencies: ["Node.js", "MongoDB", "Mongoose", "Express.js"],
  technologies: ["JavaScript", "HTML", "CSS", "Git", "VSCode", "Insomnia"],
  githubLink: "https://github.com/ashleighcorse/Social-Network-API",
  screenshot: SocNetAPIScr,
};

const challenge19 = {
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

const challenge20 = {
  id: 20,
  title: "REACT Portfolio",
  description:
    "This is my professional portfolio showcasing my projects and skills.",
  dependencies: ["React", "Bootstrap", "Mantine", "Vite", "Eslint"],
  technologies: ["JavaScript", "React", "Bootstrap"],
  githubLink: "https://github.com/ashleighcorse/React-Portfolio",
  screenshot: ProfPortfolioScr,
};
const challenge21 = {
  id: 21,
  title: "Book Search Engine",
  description: "This is my book search Engine using the MERN stack.",
  dependencies: ["React", "Bootstrap", "Mantine", "Vite", "Eslint"],
  technologies: ["JavaScript", "React", "Bootstrap"],
  githubLink: "https://github.com/ashleighcorse/React-Portfolio",
  screenshot: ProfPortfolioScr,
};
const project1 = {
  id: 7,
  title: "Charizard vs Chimpanzee",
  description:
    "This is my first group project for the DU edX bootcamp. My team and I decided to build a stat comparison site to compare Pokemon with real world animals. We used a third party Pokemon API, and a third party animal API to fetch our data, and rendered it on the page.",
  dependencies: ["Bulma"],
  technologies: ["JavaScript", "Third Party APIs", "Modals", "Local Storage"],
  githubLink: "https://github.com/ashleighcorse/React-Portfolio",
  screenshot: ProfPortfolioScr,
};
const project2 = {
  id: 7,
  title: "Hobbits on Holiday",
  description:
    "This is my second group project for the DU edX bootcamp. My team and I decided to build a D&D and Lord of the Rings based game where players can create a Hobbit character, place their character token in Middle Earth on a map, encounter monsters, and fight by rolling a d20. We used a third party D&D API, and a Map of Middle Earth using Leaflet. I was able to create a d20 that rolls a random number between 0 and 20, and assist with rendering the D&D Monsters on the game's page. I also assisted with debugging the map and Hobbit character pages.",
  dependencies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Third Party APIs",
    "Bulma",
    "Modals",
    "Local Storage",
  ],
  technologies: ["JavaScript", "React", "Bootstrap"],
  githubLink: "https://github.com/ashleighcorse/React-Portfolio",
  screenshot: ProfPortfolioScr,
};

const project3 = {
  id: 23,
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
  challenge21, //add more projects here to add to the portfolio!
  challenge20,
  challenge19,
  challenge18,
  challenge17,
  project2,
  challenge14,
  challenge13,
  challenge12,
  challenge11,
  challenge10,
  challenge9,
  project1,
  challenge5,
  challenge4,
  challenge3,
  challenge2,
];

export default projects;

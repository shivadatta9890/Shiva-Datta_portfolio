import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import ticSm from "../../../Assets/img/Portfolio items/demo.gif";
import ticLg from "../../../Assets/img/Portfolio items/demo.gif";
import weather from "../../../Assets/img/Portfolio items/weather.gif";

import Interntheory from "../../../Assets/img/Portfolio items/Interntheory.png";
import Sportsjam from "../../../Assets/img/Portfolio items/Sportsjam.png";


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";

const ProjectContainer = () => {
  const { isLight } = useContext(ThemeContext);
  const projects = [
    {
      image: [Interntheory,Interntheory],
      alt: "Interntheory.com_web_clone",
      heading: "Interntheory.com_web_clone",
      p1: "This is a clone of Interntheory.com, where we have used HTML, CSS, and Javascript to achieve this.",
      l1: "https://github.com/akashbind12/intern_theory_clone_project",
      a1: "Github page for a project.",
      l2: "https://intern-theory-clone-project.vercel.app/",
      a2: "Interntheory.com_web_clone",
      tech: [html, css, js],
    },
    {
      image: [Sportsjam, Sportsjam],
      alt: "Sportsjam.com",
      heading: "Sportsjam.com web clone",
      p1: "This is a clone of Sportsjam.com, where I have used HTML, CSS, Javascript to achieve this.",
      l1: "https://github.com/shivadatta9890/shiva",
      a1: "Github page for a lynda project.",
      l2: "https://courageous-bubblegum-de28ae.netlify.app/",
      a2: "sportsjam live website.",
      tech: [html, css, js],
    },
    {
      image: [ticSm, ticLg],
      alt: "Tic Tac Toe",
      heading: "Tic Tac Toe",
      p1: "Tic-tac-toe is a game in which two players take turns in drawing either an '0' or an 'X' in one square of a grid consisting of nine squares.",
      l1: "https://github.com/shivadatta9890/tic_tac_to",
      a1: "Github page for a project.",
      l2: "https://tic-tac-toe-02.netlify.app/",
      a2: "Tic Tac Toe live website.",
      tech: [html, css, js, react],
    },
    {
      image: [weather, weather],
      alt: "Weather App",
      heading: "Weather App",
      p1: "A Weather search app, where users can search various city weather and get the full  weather details of it.",
      l1: "https://github.com/shivadatta9890/weather_appli",
      a1: "Github page for a project.",
      l2: "https://jazzy-sopapillas-0d2f5c.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
  ];
  return (
    <div className={`${styles.projectContainer} ${!isLight && styles.dark}`}>
      {projects.map((data, index) => {
        return <ProjectItem data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default ProjectContainer;

import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Pantry Pals",
      image: "/images/Pantry_Pals.png",
      githubLink: "https://github.com/mlipscomb24/P2-Pantry_Pals",
      description: "A brief description of Pantry Pals",
    },
    {
      title: "Just Another Text Editor",
      image: "/images/JATE.png",
      githubLink: "https://github.com/mlipscomb24/Just-Another-Text-Editor_19",
      description: "A Progressive Web Application for text editing",
    },
    {
      title: "Project 3",
      image: "/images/project3.png",
      githubLink: "https://github.com/yourusername/project3",
      description: "Description of project 3",
    },
    {
      title: "Project 4",
      image: "/images/project4.png",
      githubLink: "https://github.com/yourusername/project4",
      description: "Description of project 4",
    },
    {
      title: "Project 5",
      image: "/images/project5.png",
      githubLink: "https://github.com/yourusername/project5",
      description: "Description of project 5",
    },
    {
      title: "Project 6",
      image: "/images/project6.png",
      githubLink: "https://github.com/yourusername/project6",
      description: "Description of project 6",
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

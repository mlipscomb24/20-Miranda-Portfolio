import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Pantry Pals",
      image: "/images/Pantry_Pals.png", // Updated path
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/mlipscomb24/P2-Pantry_Pals",
      description: "A brief description of Pantry Pals",
    },
    {
      title: "Project 2",
      image: "/images/project2.jpg", // Assuming you'll add this image later
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2",
      description: "A brief description of project 2",
    },
    // Add four more projects here to have a total of six
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

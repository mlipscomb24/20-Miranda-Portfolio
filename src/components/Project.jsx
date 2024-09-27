import React from "react";

function Project({ title, image, githubLink, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
}

export default Project;
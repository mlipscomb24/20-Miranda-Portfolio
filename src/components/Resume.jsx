import React from "react";

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    // Add more proficiencies as needed
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a
        href="/path/to/your/resume.pdf"
        download="YourName_Resume.pdf"
        className="download-link"
      >
        Download Resume
      </a>
      <div className="proficiencies">
        <h3>Technical Proficiencies</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;

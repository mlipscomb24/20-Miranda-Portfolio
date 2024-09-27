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
      <div className="resume-container">
        <iframe
          src="/assets/DRAFTMiranda.Resume.pdf"
          title="Resume"
          width="100%"
          height="600px"
          className="resume-pdf"
        />
        <a
          href="/assets/DRAFTMiranda.Resume.pdf"
          download="YourName_Resume.pdf"
          className="download-link"
        >
          Download Resume
        </a>
      </div>
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

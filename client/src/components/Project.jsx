import React from "react";
import "../styles/project.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project({ project }) {
  return (
    <>
      <div className="project-container">
        <div className="text-container">
          <div className="project-header">
            <h1>{project.title}</h1>
            <a href={project.url}>
              <GitHubIcon style={{ fontsize: "large", marginTop: "12px" }} />
            </a>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="project-body">
          <img className="image" src={project.image} alt="project"></img>
        </div>
      </div>
    </>
  );
}

export default Project;

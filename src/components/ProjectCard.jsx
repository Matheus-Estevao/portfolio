import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <a href={props.link} target="_blank">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;

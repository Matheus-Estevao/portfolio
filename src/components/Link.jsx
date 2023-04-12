import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  const { img, title, desc, link } = props;

  function handleClick(event) {
    event.preventDefault(); // Evita a ação padrão do link
    window.open(link, '_blank'); // Abre uma nova aba com o link do projeto
  }

  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={link} onClick={handleClick}>
        Veja mais
      </Link>
    </div>
  );
}

export default ProjectCard;

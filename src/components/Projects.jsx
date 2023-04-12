import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-container">
        <div className="project-card">
          <a href="https://github.com/seu-usuario/projeto1" target="_blank">
            <img src="midia/carrossel/projeto1.svg" alt="Projeto 1" />
            <h3>Projeto 1</h3>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/seu-usuario/projeto2" target="_blank">
            <img src="midia/carrossel/projeto2.svg" alt="Projeto 2" />
            <h3>Projeto 2</h3>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/seu-usuario/projeto3" target="_blank">
            <img src="midia/carrossel/projeto3.svg" alt="Projeto 3" />
            <h3>Projeto 3</h3>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/seu-usuario/projeto4" target="_blank">
            <img src="midia/carrossel/projeto4.svg" alt="Projeto 4" />
            <h3>Projeto 4</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

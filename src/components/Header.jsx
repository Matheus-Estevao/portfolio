import React from 'react';

function Header() {
  return (
    <header className="header">
      <blockquote className="header-quote">
        <p>
          "Acredite em si mesmo e em seu potencial para alcançar grandes
          coisas."
        </p>
      </blockquote>
      <img
        className="header-img"
        src="midia/imagem-do-perfil.jpg"
        alt="Minha Imagem"
      />
      <nav>
        <ul className="header-menu">
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
          <li>
            <a href="#formacao">Formação</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

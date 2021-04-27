import React, { Component } from 'react';
import {IoIosArrowRoundForward} from 'react-icons/io';
import {useHistory} from 'react-router-dom';


import './style.css'

const Header = () => {
  const history = useHistory();

return (
    <header className="tudo">
      <div className="nomeHeader">
        <button onClick={(() => history.push({pathname: '/'}))} key={Component}>Profª Dra Patrícia Prudêncio</button>
        </div>
      <nav>
      <ul className="listaNav">
        <li><button onClick={(()=>history.push({pathname: '/portfolio'}))}>
          Quem sou eu
          </button></li>
        <li><button>Cursos</button></li>
        <li><button>E-books</button></li>
        <li><button onClick={(()=>history.push({pathname: '/contato'}))}>
          Contato
          </button></li>
      </ul>
      </nav>
      <section className="escritos">
        <h1>Push your Life to a new Level</h1>
        <p>Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis</p>
        <button onClick={(()=>history.push({pathname: '/portfolio'}))}>Saiba Mais <IoIosArrowRoundForward size={14}/></button>
      </section>
      <section>
      <div className="nada"></div>
      </section>
    </header>
  )
}

export default Header;
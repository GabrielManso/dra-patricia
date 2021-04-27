import React from 'react';
import Header from '../../components/header/Header';

import './style.css'
import { useHistory } from 'react-router';

const Main = () => {
  const history = useHistory();
  return (
    <section>
      <Header />
      <div className="quadradoBranco"></div>
      <div className="sobre">
        <div className="frases">
          <h1>Sobre mim</h1>
          <p>
            Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis
          </p>
          <div className="btn">
            <button onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
            <button className="btn-contato" onClick={(() => history.push({pathname: '/contato'}))}>Contato</button>
          </div>
        </div>
        <div className="foto">
        </div>
      </div>
      <div className="espec">
        <ul>
          <li>
            <p>134</p>
            <article>Cursos</article>
          </li>
          <li>
            <p>45</p>
            <article>Vídeo Aulas</article>
          </li>
          <li>
            <p>653</p>
            <article>Especializações</article>
          </li>
          <li>
            <p>22</p>
            <article>Anos de Carreira</article>
          </li>
        </ul>
      </div>
    </section>
  ) 
}

export default Main;
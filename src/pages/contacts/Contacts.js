import React from 'react';

import Header from '../../components/header/Header';

import './styles.css'

const Contacts = () => {

  return (
    <div>
      <Header />
      <div className="contato-geral">
        <h1>Contato</h1>
        <div className="formas-contato">
          <p>clique no botão abaixo e fale conosco</p>
          <button className="whats">Whatsapp</button>
          <p>clique no botão abaixo e nos envie um e-mail</p>
          <button className="email">E-mail</button>
          <div className="redes-sociais">
            <h2>Redes Sociais</h2>
            <ul>
              <li>
              <button><img src="/Img/003-facebook.png" alt="Logo Facebook"/></button>      
              </li>
              <li>
              <button><img src="/Img/001-youtube.png" alt="Logo Youtube"/></button>
              </li><li>
              <button><img src="/Img/002-instagram.png" alt="Logo Intgram"/></button>
              </li><li>
              <button><img src="/Img/004-linkedin.png" alt="Logo Linkedin"/></button>
              </li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
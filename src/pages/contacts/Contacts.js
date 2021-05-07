import React from 'react';

import Header from '../../components/header/Header';
import GridConteiner from '../../components/Grid/GridConteiner';
import GridItem from '../../components/Grid/GridItem';

import './styles.css'

const Contacts = () => {

    const facebook = () => window.location.href = "https://www.facebook.com/profadrapatriciaprudencio"; 
    const instagram = () => window.location.href = "https://www.instagram.com/prof.drapatriciaprudencio/";
    const youtube = () => window.location.href = "https://www.youtube.com/channel/UCwY6zwpgHXkNq9Z1sAlWIOA";
    const whatsapp = () => window.location.href = "https://api.whatsapp.com/send?phone=5514982095130";
    const linkedin = () => window.location.href = "";

  return (
    <div>
      <Header />
      <GridConteiner>
        <div className="contato-geral">
          <h1>Contato</h1>
          <div className="formas-contato">
            <p>clique no botão abaixo e fale conosco</p>
            <button onClick={whatsapp} className="whats">Whatsapp</button>
            <p>clique no botão abaixo e nos envie um e-mail</p>
            <button className="email">E-mail</button>
            <div className="redes-sociais">
              <h2>Redes Sociais</h2>
              <ul>
                <li>
                <button onClick={facebook}> <img src="/Img/003-facebook.png" alt="Logo Facebook"/></button>      
                </li>
                <li>
                <button onClick={youtube}> <img src="/Img/001-youtube.png" alt="Logo Youtube"/></button>
                </li><li>
                <button onClick={instagram}> <img src="/Img/002-instagram.png" alt="Logo Intgram"/></button>
                </li><li>
                <button onClick={linkedin}> <img src="/Img/004-linkedin.png" alt="Logo Linkedin"/></button>
                </li>
              </ul>
          </div>
          </div>
        </div>
      </GridConteiner>
    </div>
  )
}

export default Contacts;
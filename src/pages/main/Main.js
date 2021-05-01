import React from 'react';
import Header from '../../components/header/Header';
import { FiChevronRight } from 'react-icons/fi';

import './style.css'
import { useHistory } from 'react-router';

const Main = () => {
  const history = useHistory();

  const [email, setEmail] = React.useState('');

  function handleChange ({target}) {
    setEmail(target.value);
  }

  return (
    <section>
      <Header />
      <div className="infos">
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
          <img src="/Img/foto-2.png" alt="Foto 2 Patricia"/>
        </div>
      </div>
      <div className="espec">
        <div className="videos">
          <p>45</p>
          <article>Videos Aulas</article>
        </div>
        <div className="cursos">
          <p>432</p>
          <article>Cursos</article>
        </div>
        <div className="especializacoes">
          <p>525</p>
          <article>Especializações</article>
        </div>
        <div className="Carreira">
          <p>146</p>
          <article>Carreira</article>
        </div>
      </div>
      <section className="dif">
        <h1>Diferenciais</h1>
        <h2>Cursos e Consultorias</h2>
        <ul className="diful">
          <li className="listDif">
            <h3>Loren Ipsum</h3>
            <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
              sit amet  nils  sed, lactionia laareet
            </p>
            <button onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
          <li className="listDif">
            <h3>Loren Ipsum</h3>
            <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
              sit amet  nils  sed, lactionia laareet
            </p>
            <button onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
          <li className="listDif">
            <h3>Loren Ipsum</h3>
            <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
              sit amet  nils  sed, lactionia laareet
            </p>
            <button onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
        </ul>
        <div className="par">
          <h1>Parceiros</h1>
          <h2>Veja aonde estou atuando</h2>
          <ul className="parul">
            <li className="parceiros">
            <h3>Loren Ipsum</h3>
              <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
                sit amet  nils  sed, lactionia laareet
              </p>
            </li>
            <li className="parceiros">
            <h3>Loren Ipsum</h3>
              <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
                sit amet  nils  sed, lactionia laareet
              </p>
            </li>
            <li className="parceiros">
            <h3>Loren Ipsum</h3>
              <p>Phasellas in acyliais ante, Fusce adio justo, pulvinar
                sit amet  nils  sed, lactionia laareet
              </p>
            </li>
          </ul>
        </div>
      </section>
      </div>
      <div className="ebooks">
        <h1>E-book gratuito</h1>
        <div className ="inputEmail">
          <form>
            <input
            type="email"
            value={email}
            placeholder="      Digite seu E-mail"
            size={14}
            onChange={handleChange}/>
            <button disabled >Em breve</button>
          </form>
        </div>
      </div>
      <section className="curso">
        <h1>Cursos</h1>
        <ul>
          <li>
            <div className="cinza"></div>
            <p className="data">10.05.2021</p>
            <h2>Loren Ipsum</h2>
            <p className="parag">Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis</p>
            <button onClick={(() => history.push({pathname: '/contato'}))}>Veja mais</button>
          </li>
          <li>
            <div className="cinza"></div>
            <p className="data">10.05.2021</p>
            <h2>Loren Ipsum</h2>
            <p className="parag">Morbi et nusl a sapien malesuada scelerisque suspensisse tempor turbis mattis</p>
            <button onClick={(() => history.push({pathname: '/contato'}))}>Veja mais</button>
          </li>
        </ul>
      </section>
    </section>
  ) 
}

export default Main;
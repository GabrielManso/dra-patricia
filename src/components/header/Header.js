import React from 'react';
import {useHistory} from 'react-router-dom';


import './style.css';

const Header = () => {
  const history = useHistory();

return (
    <header>
        <div className="logo">
          <img src="/Img/Logo-Patricia.png" alt="Logo Patricia"/>
        </div>
        <GridConteiner>
        <GridItem>
          <nav>
            <ul className="ListaNav">
              <li><button className="btn-header" onClick={(() => history.push({pathname: './'}))}>Home</button></li>
              <li><button className="btn-header" onClick={(() => history.push({pathname: './portfolio'}))}>Quem sou eu</button></li>
              <li><button className="btn-header" onClick={(() => history.push({pathname: './'}))}>Cursos</button></li>
              <li><button className="btn-header" onClick={(() => history.push({pathname: './'}))}>Ebook</button></li>
              <li><button className="btn-header" onClick={(() => history.push({pathname: './contato'}))}>Contato</button></li>
            </ul>
          </nav>
        </GridItem>
      </GridConteiner>
    </header>
  )
}

export default Header;
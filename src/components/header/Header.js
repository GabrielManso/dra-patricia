import React from 'react';
import {
        IoIosArrowRoundForward,
        IoIosBook,
        IoIosCall,
        IoIosEasel,
        }
        from 'react-icons/io';
import { FiMessageCircle } from 'react-icons/fi'
import {useHistory} from 'react-router-dom';


import './style.css'

const Header = () => {
  const history = useHistory();

return (
    <header>
      <div className="nomeHeader">
        <p>Profa. Dra. Patrícia Prudêncio</p>
        </div>
      <nav>
      <ul className="listaNav">
        <li><button onClick={(()=>history.push({pathname: '/portfolio'}))}>
          Quem sou eu  <FiMessageCircle size={14}/>
          </button></li>
        <li><button>Cursos  <IoIosEasel size={14}/></button></li>
        <li><button>E-books  <IoIosBook size={14} /></button></li>
        <li><button onClick={(()=>history.push({pathname: '/contato'}))}>
          Contato  <IoIosCall size={14}/>
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
import React from 'react';

import Header from '../../components/header/Header';


import './style.css'
import { useHistory } from 'react-router';
import Footer from '../../components/footer/Footer';

const Main = () => {
  const history = useHistory();

  const [email, setEmail] = React.useState('');

  const curso1 = () => window.location.href = "https://hotm.art/tQOdpj"; 
  const curso2 = () => window.location.href = "https://hotm.art/UZRGAg4A"; 


  function handleChange ({target}) {
    setEmail(target.value);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="main">
      <Header />
        <div className="parteSuperior">
          <h1>Saúde da mulher e Saúde da Criança</h1>
          <p>Ensino Enfermeiros a prestarem ciudados maternos infantis com excelência e segurança</p>
          <button onClick={(() => history.push({pathname: './'}))}>Conheça nossos cursos</button>
        </div>
    
      <div className="infos">
      <div className="sobre">
    
          <div className="frases">
            <h1>Sobre mim</h1>
            <p>Meu nome é Patrícia S. Prudêncio, sou Enfermeira, Docente Universitária e Empresária. Minhas áreas de 
              atuação são a Saúde da Mulher (Ginecologia e Obstetrícia) e Saúde da Criança (Neonatologia). 
              Atualmente sou pós-doutoranda pela Universidade Estadual Paulista “Júlio de Mesquita Filho” (Unesp).
              Realizei o Doutorado e Mestrado pela Escola de Enfermagem de Ribeirão Preto da Universidade de São Paulo (
                EERP-USP). Atualmente gerencio a Empresa “Prudêncio – Cursos e Consultorias” onde presto serviços de capacitação
                  profissional e consultorias em saúde (online e presencial) na área da Saúde da Mulher e da Criança.</p>
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
          <p>3</p>
          <article>E-Books escritos</article>
        </div>
        <div className="cursos">
          <p>5</p>
          <article>Cursos gravados</article>
        </div>
       
        <div className="especializacoes">
          <p>8</p>
          <article>Especializações</article>
        </div>
        
        <div className="Carreira">
          <p>23</p>
          <article>Anos de Carreira</article>
        </div>
      </div>
      <section className="dif">
        <h1>Diferenciais</h1>
        <h2>Cursos e Consultorias</h2>
        
        <ul className="diful">
          <li className="listDif list-1">
            <h3>Marca - DNA USP</h3>
            <p>Iniciativa da Universidade de São Paulo (USP) 
              criada para identificar empresas constituídas por alunos, ex-alunos e pesquisadores
            </p>
            <button className="btn-1" onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
          <li className="listDif">
            <h3>
                Campanha Nursing Now Brasil</h3>
            <p>Iniciativa exitosa pelo Conselho Federal
              de Enfermagem (Cofen) e do Centro 
              Colaborador da Organização Pan-Americana de Saúde e Organização Mundial da Saúde.
            </p>
            <button className="btn-2" onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
          <li className="listDif">
            <h3>Membro do Sigma Teta
                Tau Internacional</h3>
            <p>Iniciativa de enfermeiros líderes brasileiros de
                fortalecer a enfermagem, ampliar sua
                visibilidade e as redes de comunicação entre
                profissionais.
            </p>
            <button className="btn-3" onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>
          <li className="listDif list-4">
            <h3>Experiência Internacional
                na Espanha</h3>
            <p>Experiência internacional no Hospital
                Universitário Vall d’ Hebrom em Barcelona (Espanha) nos setores de Obstetrícia
                Puerperal, Obstetrícia de Alto Risco
                Obstétrico, Unidade de Terapia Intensiva
                Neonatal (UTI), Ginecologia e Oncologia
                Mamária.
            </p>
            <button className="btn-4" onClick={(() => history.push({pathname: '/portfolio'}))}>Saiba Mais</button>
          </li>          
        </ul>
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
          <section className="curso" id="cursos">
            <h1>Cursos</h1>
            <ul>
              <li>
                <div className="cinza"></div>
                <p className="data">10.05.2021</p>
                <h2>Empreendedorismo, Inovação e Amamentação</h2>
                <p className="parag">O curso tem como objetivo despertar no profissional de saúde a atuação 
                empreendedora/inovadora no ramo da amamentação, contribuindo para a promoção, proteção e apoio
                ao aleitamento materno, bem como para a realização e satisfação profissional pelo trabalho empreendedor.</p>
                <button onClick={curso1}>Veja mais</button>
              </li>
              <li>
                <div className="cinza"></div>
                <p className="data">10.05.2021</p>
                <h2>Empreender em cursos para casais grávidos</h2>
                <p className="parag">O curso tem como objetivo despertar no profissional de saúde a atuação
                empreendedora/inovadora no ramo da promoção de cursos para casais grávidos, contribuindo para a segurança
                  e a qualidade da assistência materno-infantil, bem como para a realização e satisfação profissional pelo
                  trabalho empreendedor.</p>
                <button onClick={curso2}>Veja mais</button>
              </li>
            </ul>
          </section>
      <section className="podcast">
        <h1>Podcast</h1>
        <div className="img-podcast">
          <button><img src="Img/Spotify-Logo.png" alt="" /></button>
          <button><img src="Img/454-4545367_anchor-png-transparent.png" alt="" /></button>
        </div>
        <p>Clique no ícone da plataforma que deseja ouvir</p>
      </section>
      <section className="parceiros">
        <h1>Parceiros</h1>
      <div className="img-parceiros">
        <img src="Img/logo-quad.png" alt="" />
        <img src="Img/logo_ves.png" alt="" />
        <img src="Img/Outlook-jy0dybt4.png" alt="" />
        <img src="Img/20200929182002.png" alt="" />
      </div>
      </section>
      <Footer />
    </section>
  ) 
}

export default Main;
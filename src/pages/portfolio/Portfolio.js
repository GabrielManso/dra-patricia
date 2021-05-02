import React from 'react';
import Header from '../../components/header/Header';

import './styles.css';

const Portfolio = () => {

  return (
    <div>
      <Header/>
      <h1 className="Nome">Profª. Dra. Patrícia Prudêncio</h1>
      <div className="geral">
        <div className="escritos">
          <p className="p1">
          Meu nome é Patrícia S. Prudêncio, sou Enfermeira, Docente Universitária e
Empresária.  Minhas áreas de atuação são a Saúde da Mulher
(Ginecologia e Obstetrícia) e Saúde da Criança (Neonatologia).
Atualmente sou pós-doutoranda pela Universidade Estadual Paulista “Júlio de Mesquita Filho” (Unesp). Realizei o Doutorado e Mestrado pela Escola de
Enfermagem de Ribeirão Preto da Universidade de São Paulo (EERP-USP).
Sou Especialista em Enfermagem em Cuidado Pré-natal pela Universidade Federal de São Paulo (Unifesp), Especialista em Ginecologia e Obstetrícia
(Faculdade Galileu), Especialista em Enfermagem em Unidade de Terapia
Intensiva Neonatal (Centro Universitário Leonardo da Vinci). 
Sou formada pela Universidade Federal do Mato Grosso do Sul (UFMS).
Em 2004 iniciei minha atuação profissional como funcionária pública na Atenção Primária a Saúde, onde puder crescer profissionalmente e pessoalmente. Foi um período de muitas experiências e que me impulsionaram a buscar novos
conhecimentos.
          </p>
          <p className="p2">
          Em 2006 mudei-me para a Espanha (Barcelona) onde tive a oportunidade de conhecer outra realidade cultural e de saúde.
           Atuei na Maternidade do Hospital Universitário Vall d’Hebrom nos setores de Obstetrícia Puerperal, Ginecologia, 
           Unidade de Terapia Intensiva Neonatal (UTI), Obstetrícia de Alto Risco Obstétrico. Foi uma experiência apaixonante 
           e inesquecível!
Em 2007 retornei ao Brasil e tive a oportunidade de atuar na Maternidade da Santa Casa de Misericórdia de São Carlos (SP). 
Em 2010 ingressei na pós-graduação em Saúde Pública na Escola de Enfermagem de Ribeirão Preto da Universidade de São Paulo 
(EERP-USP) onde descobri minha paixão pela academia e pela pesquisa. Realizei o Mestrado e o Doutorado na EERP-USP e que me 
projetaram para as atividades profissionais que realizo atualmente.
Atualmente gerencio a Empresa “Prudêncio – Cursos e Consultorias” onde presto serviços de capacitação profissional e 
consultorias em saúde (online e presencial) na área da Saúde da Mulher e da Criança.
          </p>
          </div>
          <div className="imagens">
            <img className="foto-port" src="/Img/Foto-1.png" alt=""/>
            <img className="logo-port" src="/Img/Patricia_prudencio_logo-04.png" alt="Logo Patrícia"/>
            </div>
      </div>
       <div className="lista-valores">
        <ul>
          <li>
            <img src="/Img/target.png" alt="Target Valeu"/>
            <h1>Missão</h1>
            <p>Contribuir com a formação e o
  aperfeiçoamento profissional
  fundamentado nas melhores
  evidências científicas e que
  proporcione consequentemente
  o oferecimento de uma assistência de qualidade, humanizada e segura.</p>
          </li>
          <li>
            <img src="/Img/vision.png" alt="Vision Valeu"/>
            <h1>Visão</h1>
            <p>Alcançar o reconhecimento como uma empresa de excelência e de referência quanto a capacitação 
              profissional e consultorias na área da Saúde da Mulher e da Saúde da Criança.</p>
          </li>
          <li>
            <img src="/Img/heart.png" alt="Heart Valeu"/>
            <h1>Valores</h1>
            <p>Baseado na excelência dos serviços ofertados, formação e aperfeiçoamento profissional,
  respeito as pessoas, ética,
  compromisso com a aprendizagem.</p>
          </li>
        </ul>
      </div> 
      <div className="diferenciais">
        <h1>Diferenciais</h1>
         <div className="comlogo">
          <div className="texto">
            <h2>Marca - DNA USP</h2>
            <p>iniciativa da Universidade de São Paulo (USP) 
              criada para identificar empresas constituídas 
              por alunos, ex-alunos e pesquisadores</p>
          </div>
            <img src="/Img/DNA.png" alt="NDA logo"/>
        </div> 
        <h2>Reconhecimento como
Iniciativa Exitosa pela
Campanha Nursing Now Brasil</h2>
        <p>Iniciativa exitosa pelo Conselho Federal
de Enfermagem (Cofen) e do Centro 
Colaborador da Organização Pan-Americana de Saúde e Organização Mundial da Saúde.</p>
        <div className="comlogo">
        <div className="texto"><h2>Membro do Sigma Teta
Tau Internacional</h2>
        <p>Membro do Capítulo Rho Upsilon da Sociedade Honorífica de Enfermagem Sigma Theta Tau International (STTI) da Escola de Enfermagem de Ribeirão Preto - Universidade de São Paulo (USP), Centro Colaborador da Organização Mundial da Saúde para o Desenvolvimento da Pesquisa em Enfermagem.
O Capítulo representa a iniciativa de enfermeiros líderes
brasileiros de fortalecer a enfermagem, ampliar sua visibilidade e as redes de comunicação entre profissionais. Suas atividades tem como objetivo auxiliar a construção de parcerias com indivíduos e comunidades, utilizando o conhecimento e a
ciência para a melhoria da saúde da população mundial.</p>
        </div>
        <img className="teta" src="/Img/logo-sigma.png" alt="Logo Sigma"/>
        </div>
        <h2>Experiência Internacional na Espanha</h2>
        <p>Experiência internacional no Hospital Universitário Vall d’ Hebrom em Barcelona (Espanha) nos setores de Obstetrícia Puerperal, Obstetrícia de Alto Risco Obstétrico, Unidade de
Terapia Intensiva Neonatal (UTI), Ginecologia e Oncologia
Mamária. Uma experiência diferenciada que proporcionou muito aprendizado na área da Saúde da Mulher e Saúde da Criança.</p>

      </div>
    </div>
  )
}

export default Portfolio;
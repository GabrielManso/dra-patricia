import React from 'react';

import Header from '../../components/header/Header';

import './styles.css'

const Contacts = () => {
  const [name, setName] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [message, setMessage] = React.useState('');

  return (
    <div>
      <Header />
      <div className="quadradoBranco"></div>
      <div className="geral">
        <h1>Contatos</h1>
        <form>

          <label htmlFor="Nome">Nome</label>
          <input 
          type="text" 
          id="Nome"
          value ={name}
          onChange={event => setName(event.target.value)}/>

          <label htmlFor="email">E-mail</label>
          <input 
          type="e-mail" 
          id="email"
          value ={email}
          onChange={event => setEmail(event.target.value)}/>

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" 
          valeu={message} onChange={(event => setMessage(event.target.value))}
          rows="5"
          cols="33"
          />   
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
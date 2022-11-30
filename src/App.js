import React from 'react';
import FormLogo from './assets/form-logo.png'
import './App.css';


function App() {
  return (
    <form>
      <img src={FormLogo} alt="imagem-logo" />

      <label>
        Nome
        <input />
      </label>
      
      <label>
        Email
        <input />
      </label>

      <label>
        Senha
        <input />
      </label>

      <label>
        Confirmar Senha
        <input />
      </label>

      <button type="Submit" >Cadastrar-se</button>
    </form>
  );
}

export default App;

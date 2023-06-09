import logo from '../img/visiona_logo.png';
import './ConfirmarSenha.css';
import senha from '../img/senha.png'
import { useState } from "react";

function ConfirmaSenha() {
  return (
    <div className="container">
      <div className="container-confirma">
        <div className="wrap-confirma">
          <form className="confirma-form">
            <span className="confirma-form-title">
              <img src={logo} alt="logo visiona"/>
              <div className='senha'>
                <img src={senha} alt="senha" />
              </div>
            </span>
            <div className="text-center">
              Senha atualizada com sucesso, faça o login em nossa página de entrada.
            </div>
            <div className="container-confirma-form-btn">
              <button className="confirma-form-btn">Fazer Login</button>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={logo} alt="little_tech"></img>
        </div>
      </div>
    </div>
  );
}

export default ConfirmaSenha;
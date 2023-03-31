import React, { useState } from "react";

import logo from "../img/visiona_logo.png";
import LT from "../img/little_tech.png";

import email_icon from '../img/email.png'


function CE() {

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="logo visiona"/>
              <div className='email'>
              <img src={email_icon} alt="email confirm icon"></img>
             </div>
            </span>
            <span className="text-center">E-mail confirmado com sucesso, faça login na página de dentrada.</span>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Fazer login</button>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={LT} alt="little_tech"></img>
        </div>
      </div>
    </div>
  );
}

export default CE;

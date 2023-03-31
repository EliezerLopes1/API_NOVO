import logo from '../img/visiona_logo.png';
import LT from "../img/little_tech.png"
import './ValidarTokenEmail.css';
import { useState } from "react";


function ValidarTokenEmail() {
  const [token, setToken] = useState("");


  const camposPreenchidos = () => {
    if (token === "") {
      return alert("Preencha todos os campos.");
    }
    // Código para cadastrar o usuário
  };
  return (
    <div className="container">
      <div className="container-token">
        <div className="wrap-token">
          <form className="token-form">
            <span className="token-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <span className="text-center"> Digite o token para validar o seu E-mail:</span>
            <div className="wrap-input">
              <input
                className={token !== "" ? "has-val input" : "input"}
                type="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Token"></span>
            </div>         
            <div className="container-token-form-btn">
              <button className="token-form-btn" onClick={camposPreenchidos}>Validar Token</button>
            </div>
            <div className="text-center">
              <a className="txt1" href="#">
                Voltar para a página de login
              </a>
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

export default ValidarTokenEmail;

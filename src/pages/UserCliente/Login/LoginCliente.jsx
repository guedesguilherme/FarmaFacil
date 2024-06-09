import { Link } from "react-router-dom";

import React from 'react'

import "./LoginCliente.css"

const LoginCliente = () => {
  return (
    <div className="container">


      <div className="topo-page">

        <Link to={"/"}>
          <img src="../../../../public/img/icons/back.svg" alt="Voltar" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Entrar</h2>

        <Link to={"/cliente/cadastro"}>
          <h3 className="primary-text-btn">Cadastrar</h3>  
        </Link>

      </div>


      <form action="">

        <div className="form-control">

            <label for="telefone" class="labels">Insira e-mail cadastrado.</label>
            <input type="text" name="telefone" id="" placeholder="Insira seu e-mail aqui" class="inputs"/>

            <label for="senha" class="labels">Insira sua senha.</label>
            <input type="text" name="senha" id="" placeholder="Insira seu e-mail aqui" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>


            <Link to={"/cliente/home"} className="primary-btn">
              Entrar
            </Link>

            <div id="entrar-com-email">
              <Link to={"/cliente/entrar/email"} className="secondary-btn">
                Entrar com e-mail
              </Link>
            </div>

        </div>

      </form>

      <span id="esquece-senha" className="tertiary-text-btn">Esqueceu sua senha?</span>

    </div>
  )
}

export default LoginCliente
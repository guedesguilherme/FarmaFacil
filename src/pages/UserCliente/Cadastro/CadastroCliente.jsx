import { Link } from "react-router-dom";

import React from 'react'

import "./CadastroCliente.css"

const CadastroCliente = () => {
  return (
    <div className="container">


      <div className="topo-page">

        <Link to={"/"}>
          <img src="../../../../public/img/icons/back.svg" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/cliente/entrar"}>
          <h3 className="primary-text-btn">Entrar</h3>  
        </Link>

      </div>

      <form action="">

        <div className="form-control">

            <label for="nome" class="labels">Nome completo</label>
            <input type="text" name="nome" id="" placeholder="Insira seu nome aqui" class="inputs"/>

            <label for="telefone" class="labels">E-mail</label>
            <input type="text" name="telefone" id="" placeholder="Insira seu melhor e-mail aqui" class="inputs"/>

            <label for="senha" class="labels">Escolha uma senha</label>
            <input type="text" name="senha" id="" placeholder="Defina uma senha aqui" class="inputs"/>

            <label for="senha" class="labels">Repita a senha</label>
            <input type="text" name="senha" id="" placeholder="Repita a senha definida aqui" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>

            <Link to={"/cliente/home"} className="primary-btn">
              Cadastrar
            </Link>

        </div>

      </form>
    </div>
  )
}

export default CadastroCliente
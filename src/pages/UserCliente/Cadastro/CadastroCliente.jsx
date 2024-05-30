import { Link } from "react-router-dom";

import React from 'react'

import "./CadastroCliente.css"

const CadastroCliente = () => {
  return (
    <div className="container">


      <div className="topo-page">

        <Link>
          <img src="" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Cadastrar</h2>
        <h3 className="primary-text-btn">Entrar</h3>

      </div>

      <form action="">

        <div className="form-control">

            <label for="nome" class="labels">Insira seu nome completo abaixo.</label>
            <input type="text" name="nome" id="" class="inputs"/>

            <label for="telefone" class="labels">Insira seu número de telefone abaixo.</label>
            <input type="text" name="telefone" id="" class="inputs"/>

            <label for="senha" class="labels">Escolha uma senha abaixo.</label>
            <input type="text" name="senha" id="" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" id=""/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>

            <Link to={"/cliente/home"} className="primary-btn">
              Cadastrar
            </Link>

        </div>

      </form>

      <span id="esquece-senha">Esqueceu sua senha?</span>

    </div>
  )
}

export default CadastroCliente
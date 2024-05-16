import { Link } from "react-router-dom";

import React from 'react'

import "./LoginCliente.css"

const LoginCliente = () => {
  return (
    <div className="container">


      <div className="topo-page">

        <Link>
          <img src="" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Entrar</h2>
        <h2 className='primary-text-btn'>Cadastrar</h2>

      </div>


      <form action="">

        <div className="form-control">

            <label for="telefone" class="labels">Insira seu número de telefone abaixo.</label>
            <input type="text" name="telefone" id="" class="inputs"/>

            <label for="senha" class="labels">Escolha uma senha abaixo.</label>
            <input type="text" name="senha" id="" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" id=""/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>


            <Link>
              Entrar
            </Link>

        </div>

      </form>

      <span id="esquece-senha">Esqueceu sua senha?</span>

    </div>
  )
}

export default LoginCliente
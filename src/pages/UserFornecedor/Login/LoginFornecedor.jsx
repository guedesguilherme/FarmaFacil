import { Link } from "react-router-dom";

import React from 'react'

const LoginFornecedor = () => {
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

            <label for="email" class="labels">Insira seu e-mail comercial</label>
            <input type="email" name="telefone" id="" placeholder="Insira seu e-mail aqui" class="inputs"/>
            
            <label for="cnpj" class="labels">Insira seu CNPJ</label>
            <input type="text" name="telefone" id="" placeholder="Insira seu CNPJ aqui" class="inputs"/>

            <label for="senha" class="labels">Insira sua senha.</label>
            <input type="password" name="senha" id="" placeholder="Insira sua senha aqui" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>


            <Link to={"/fornecedor/home"} className="primary-btn">
              Entrar
            </Link>

        </div>

      </form>

      <span id="esquece-senha" className="tertiary-text-btn">Esqueceu sua senha?</span>

    </div>
  )
}

export default LoginFornecedor
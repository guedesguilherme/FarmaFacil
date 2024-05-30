import { Link } from "react-router-dom";

import React from 'react'

import "./CadastroFornecedor.css"

const CadastroFornecedor = () => {
  return (
    <div className="container">


      <div className="topo-page">

        <Link>
          <img src="" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Cadastrar</h2>
        <h2 className="primary-text-btn">Entrar</h2>

      </div>


      <form action="">

        <div className="form-control">

            <label for="razao_social" class="labels">Insira a razão social da sua farmácia.</label>
            <input type="text" name="razao_social" id="razao_social" class="inputs"/>

            <label for="email" class="labels">Insira seu e-mail comercial abaixo.</label>
            <input type="email" name="email" id="email" class="inputs"/>

            <label for="farmacia" class="labels">Sua farmácia é de qual rede?</label>
            <input type="text" name="farmacia" id="farmacia" class="inputs"/>

            <label for="cnpj" class="labels">Insira o CNPJ da sua farmácia abaixo.</label>
            <input type="text" name="cnpj" id="cnpj" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" id="chkbox"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>


            <Link to={"/fornecedor/cadastro/2"}>
              <button>
                Próxima etapa
              </button>
            </Link>

        </div>

        <span id="esquece-senha">Esqueceu sua senha?</span>

      </form>


    </div>
  )
}

export default CadastroFornecedor
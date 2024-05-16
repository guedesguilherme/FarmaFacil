import { Link } from "react-router-dom";

import React from 'react'

import "./CadastroFornecedor2.css"

const CadastroFornecedor2 = () => {
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

        <label for="endereco" class="labels">Endereço</label>
            <input type="text" name="endereco" id="endereco" class="inputs"/>

            <div class="separa_col">
                <label for="numero" class="labels">Nº</label>
                <input type="text" name="numero" id="numero" class="inputs"/>
                <label for="cep" class="labels">CEP</label>
                <input type="text" name="cep" id="cep" class="inputs"/>
            </div>

            <div class="separa_col">
                <label for="uf" class="labels">UF</label>
                <select name="uf" class="selects" id="uf">
                    <option value="">Selecione</option>
                </select>
                
                <label for="cidade" class="labels">Cidade</label>
                <select name="cidade" class="selects" id="cidade">
                    <option value="">Selecione</option>
                </select>
            </div>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" id="chkbox"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>

            <Link>
              Cadastrar minha farmácia!
            </Link>

        </div>

      </form>


      <span id="esquece-senha">Esqueceu sua senha?</span>

    </div>
  )
}

export default CadastroFornecedor2
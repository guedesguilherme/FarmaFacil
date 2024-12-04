import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import React from 'react'

import "./CadastroFornecedor2.css"

const CadastroFornecedor2 = () => {
  return (

    <div className="container">
      <Helmet>
        <title>Quase lá...</title>
      </Helmet>
      <div className="topo-page">

        <Link to={"/"}>
          <img src="../../../../public/img/icons/back.svg" alt="" srcset="" className='btn-voltar svgIcon'/>
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/fornecedor/entrar"}>
          <h3 className="primary-text-btn toCadastro">Entrar</h3>  
        </Link>

      </div>

      <h3 id="h3-cadastro-fornecedor">Quase lá...</h3>

      <form action="">

        <div className="form-control">

            <label for="razao_social" class="labels">Endereço da sua empresa</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="bairro" class="labels">Bairro</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="n-o" class="labels">N°</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="cep" class="labels">CEP</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="cidade" class="labels">Cidade</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="estado" class="labels">Selecione o seu estado</label>
            <select name="estado" id="estado" class="inputs">
                <option value="" disabled selected>Selecione seu estado</option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="TO">Tocantins (TO)</option>
            </select>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>

            <Link to={"/fornecedor/home"} className="primary-btn login">
                Próxima etapa
            </Link>

        </div>

      </form>


      {/* <span id="esquece-senha">Esqueceu sua senha?</span> */}

    </div>
  )
}

export default CadastroFornecedor2
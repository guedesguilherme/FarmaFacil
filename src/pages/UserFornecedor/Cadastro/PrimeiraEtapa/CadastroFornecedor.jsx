import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import React from 'react'

import "./CadastroFornecedor.css"

const CadastroFornecedor = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Cadastre-se no App</title>
      </Helmet>
      <div className="topo-page">

        <Link to={"/"}>
          <img src="../../../../public/img/icons/back.svg" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/fornecedor/entrar"}>
          <h3 className="primary-text-btn">Entrar</h3>  
        </Link>

      </div>


      <form action="">

        <div className="form-control">

            <label for="razao_social" class="labels">Razão social</label>
            <input type="text" name="razao_social" id="razao_social" placeholder="Insira a razão social aqui" class="inputs"/>

            <label for="email" class="labels">E-mail comercial</label>
            <input type="email" name="email" id="email" placeholder="Insira o seu e-mail comercial aqui" class="inputs"/>

            <label for="farmacia" class="labels">Sua farmácia é de qual rede?</label>
            <select name="farmacia" id="farmacia" class="inputs">
                <option value="" disabled selected>Selecione a rede da sua farmácia</option>
                <option value="Drogasil">Drogasil</option>
                <option value="Drogaria Pague Menos">Drogaria Pague Menos</option>
                <option value="Droga Raia">Droga Raia</option>
                <option value="Drogaria São Paulo">Drogaria São Paulo</option>
                <option value="Ultrafarma">Ultrafarma</option>
            </select>

            <label for="cnpj" class="labels">Insira o CNPJ da sua farmácia abaixo.</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="Insira o seu CNPJ aqui" class="inputs"/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>


            <Link to={"/fornecedor/cadastro/2"} className="primary-btn">
                Próxima etapa
            </Link>

        </div>

      </form>


    </div>
  )
}

export default CadastroFornecedor
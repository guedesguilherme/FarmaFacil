import React from 'react'
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import "./CadastrarProdutos.css"
const CadastrarProdutos = () => {
  return (
    <div className='container-produtos-fornecedor'>
      <Helmet>
        <title>Cadastre novos produtos</title>
      </Helmet>
      <div className="header">

        <h2>Preencha os Campos</h2>
        <Link to={"/fornecedor/home"} className='svgIcon'>
          <img src="../../../../public/img/icons/back.svg" alt="Voltar" srcset="" className='btn-voltar'/>
        </Link>

      </div>

      <div className="card-container">

        <div>

          <label htmlFor="nome-comercial">Nome Comercial do Medicamento</label>
          <input type="text" name='nome-comercial' />

          <label htmlFor="nome-quimico">Nome Quimico do Medicamento</label>
          <input type="text" name='nome-quimico' />

        </div>

        <div className='info-gerais'>

          <div>
            <label htmlFor="qtd">QTD</label>
            <input type="text" name='qtd' />
          </div>

          <div>
            <label htmlFor="validade">Validade</label>
            <input type="text" name='validade' />
          </div>

          <div>
            <label htmlFor="lote">Lote</label>
            <input type="text" name='lote' />
          </div>

        </div>

        <div>

          <label htmlFor="descricao1">Descrição 1</label>
          <input type="text" name='descricao1' />

          <label htmlFor="descricao2">Descrição 2</label>
          <input type="text" name='descricao2' />

        </div>

        <button className="primary-btn">Cadastrar novo produto</button>
      </div>

    </div>
  )
}

export default CadastrarProdutos
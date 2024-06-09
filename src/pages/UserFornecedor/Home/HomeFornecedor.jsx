import { Link } from "react-router-dom";

import React from 'react'

import "./HomeFornecedor.css"

const HomeFornecedor = () => {
  return (
    <div className="container">

      <div className="header">
        <h2>Olá</h2>
        <img src="../../../../public/img/icons/logout.svg" alt="" />
      </div>

      <Link className="secondary-btn">Cadastrar novo produto</Link>

      <div className="card-container">

        <div className="card">
          <h3>Gerencie seu estoque</h3>

          <p>Produtos em estoque</p>
          <h5>10</h5>

          <p>Produto em menor qtd</p>
          <h5>Dipirona</h5>

          <Link className="primary-btn">button</Link>
        </div>

        <div className="card">
          <h3>Gerencie seus pedidos</h3>

          <p>Pedidos pendentes</p>
          <h5>10</h5>

          <p>Pedidos concluídos</p>
          <h5>10</h5>

          <Link className="primary-btn">button</Link>
        </div>

      </div>

    </div>
  )
}

export default HomeFornecedor
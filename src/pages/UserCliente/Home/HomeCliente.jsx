import { Link } from "react-router-dom";

import React from 'react'

import "./HomeCliente.css"

const HomeCliente = () => {
  return (
    <div className="container-home-cliente">

      <div className='header'>
        <h2>Olá, nome</h2>
        <Link to={"/cliente/compra"}>
          <img src="../../../../public/img/icons/logout.svg" alt="" />
        </Link>
      </div>

      <div className="search-box">
        <label htmlFor="">Pesquise um medicamento</label>
        <input type="text" />
        <button className="primary-btn">Buscar Produto</button>
      </div>

      <div className="card-container">

        <div className="card cardCliente">

          <div className="half-card">

            <img src="../../../../public/img/benegrip.png" alt="Imagem Remédio Benegrip" />
            <div>
              <h3>Benegrip</h3>
              <p>R$ 100,00</p>
            </div>

          </div>

          <Link to={'/cliente/compra'} className="primary-btn">Comprar</Link>
        </div>

        <div className="card cardCliente">

          <div className="half-card">

            <img src="../../../../public/img/benegrip.png" alt="Imagem Remédio Benegrip" />
            <div>
              <h3>Benegrip</h3>
              <p>R$ 100,00</p>
            </div>

          </div>

          <Link to={'/cliente/compra'} className="primary-btn">Comprar</Link>
        </div>

        <div className="card cardCliente">

          <div className="half-card">

            <img src="../../../../public/img/benegrip.png" alt="Imagem Remédio Benegrip" />
            <div>
              <h3>Benegrip</h3>
              <p>R$ 100,00</p>
            </div>

          </div>

          <Link to={'/cliente/compra'} className="primary-btn">Comprar</Link>
        </div>
        <div className="card cardCliente">

          <div className="half-card">

            <img src="../../../../public/img/benegrip.png" alt="Imagem Remédio Benegrip" />
            <div>
              <h3>Benegrip</h3>
              <p>R$ 100,00</p>
            </div>

          </div>

          <Link to={'/cliente/compra'} className="primary-btn">Comprar</Link>
        </div>

      </div>

    </div >
  )
}

export default HomeCliente
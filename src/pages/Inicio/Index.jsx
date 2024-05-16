import { Link } from "react-router-dom";

import React from 'react'

import "./Index.css"

const Index = () => {
  return (
    <div className="container">

        <div className="logo-box">
            <img src=".././public/img/LogoFarmaFacil.png" alt="" srcset="" />
        </div>

        
        <h1>Olá, seja bem-vindo(a)</h1>

        <h2>Você possui cadastro em nosso App?</h2>

        <Link className="primary-btn">
                Sim, sou cadastrado(a)
        </Link>

        <p>ou...</p>

        <Link className="secondary-btn">
                Não, ainda não possuo cadastro.
        </Link>
        <Link className="secondary-text-btn">
                Não, ainda não possuo cadastro.
        </Link>

        <Link className="primary-text-btn">
            Sou fornecedor.
        </Link>


    </div>
  )
}

export default Index
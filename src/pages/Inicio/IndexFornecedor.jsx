import { Link } from "react-router-dom";

import React from 'react'

import "./Index.css"

const Index = () => {
  return (
    <div className="outside-contaienr">
    <div className="container">
        
        <div className="logo-box">
            <img src=".././public/img/LogoFarmaFacil.png" alt="" srcset="" />
        </div>

        
        <h1 id="h1">Olá, fornecedor! Como vai?</h1>

        <h2 id="h2">Você possui cadastro em nosso App?</h2>

        <Link className="primary-btn login" to={"/fornecedor/entrar"}>
                Sim, sou cadastrado(a)
        </Link>

        <p id="ou-index-inicio">ou...</p>
        
        <Link className="secondary-btn cadastro" to={"/fornecedor/cadastro"}> 
                Não, quero me cadastrar
        </Link>

        <div id="container-footer-inicio">
            <Link className="primary-text-btn fornecedor" to={"/"}>
                Sou cliente.
            </Link>
          </div>

    </div>
    </div>
  )
}

export default Index
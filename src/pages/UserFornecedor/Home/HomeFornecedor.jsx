import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios"; 

import "./HomeFornecedor.css"

const HomeFornecedor = () => {

  const [produtosEmEstoque, setProdutosEmEstoque] = useState(0);

  // Efetuar a requisição para buscar os produtos da farmácia
  useEffect(() => {
    const fetchProdutos = async () => {

      const id_farma = localStorage.getItem('id')

      try {
        // Substitua 'URL_DA_SUA_API' com a URL correta da sua API
        const response = await axios.get(`https://api-cadastro-farmacias.onrender.com/produtos/farmacia/${id_farma}`);

        // Atualizando o estado com o número de produtos
        setProdutosEmEstoque(response.data.length);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProdutos();
  }, []);




  return (
    <div className="container-home-fornecedor">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="header">
        <h2>Olá</h2>
        <Link to={"/fornecedor"} className="svgIcon">
          <img src="../../../../public/img/icons/logout.svg" alt="" />
        </Link>
      </div>

      <Link to={"/fornecedor/cadastrar/produtos"} className="secondary-btn cadastro">Cadastrar novo produto</Link>

      <div className="card-container">

        <div className="card">
          <h3>Gerencie seu estoque</h3>

          <p className="p-home-fornecedor">Produtos em estoque</p>
          <h5>{produtosEmEstoque}</h5>

          <p className="p-home-fornecedor">Produto em menor qtd</p>
          <h5>Dipirona</h5>

          <Link className="primary-btn login" to={"/fornecedor/gerenciar/produtos"}>Gerenciar estoque</Link>
        </div>

        <div className="card">
          <h3>Gerencie seus pedidos</h3>

          <p className="p-home-fornecedor">Pedidos pendentes</p>
          <h5>10</h5>

          <p className="p-home-fornecedor">Pedidos concluídos</p>
          <h5>10</h5>

          <Link to={"/fornecedor/gerenciar/pedidos"} className="primary-btn login">Gerenciar pedidos</Link>
        </div>

      </div>

    </div>
  )
}

export default HomeFornecedor
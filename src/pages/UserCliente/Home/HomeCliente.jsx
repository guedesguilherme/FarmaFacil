import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomeCliente.css";

const HomeCliente = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Buscar produtos ao carregar o componente
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produtos"); // Atualize com a URL da sua API
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  // Manipula a mudança da consulta de pesquisa
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/produtos?search=${searchQuery}`);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  return (
    <div className="container-home-cliente">
      <div className='header'>
        <h2>Olá, nome</h2>
        <Link to={"/"}>
          <img src="../../../../public/img/icons/logout.svg" alt="" />
        </Link>
      </div>

      <div className="search-box">
        <label htmlFor="">Pesquise um medicamento</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="primary-btn" onClick={handleSearch}>
          Buscar Produto
        </button>
      </div>

      <div className="card-container">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <div className="card cardCliente" key={produto._id}>
              <div className="half-card">
                <img
                  src="../../../../public/img/benegrip.png"
                  alt={`Imagem Remédio ${produto.nome}`}
                />
                <div>
                  <h3>{produto.nome}</h3>
                  <p>R$ {produto.preco}</p>
                </div>
              </div>
              <Link to={`/cliente/compra/${produto._id}`} className="primary-btn">
                Comprar
              </Link>
            </div>
          ))
        ) : (
          <p>Produto não encontrado!</p>
        )}
      </div>
    </div>
  );
};

export default HomeCliente;

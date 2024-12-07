import { Helmet } from "react-helmet";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./CadastrarProdutos.css"



const CadastrarProdutos = () => {

  const farmacia = localStorage.getItem('id')

  const [nome, setNome] = useState("");
  const [nome_quimico, setNomequimico] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");
  const [lote, setLote] = useState("");
  const [label, setLabel] = useState("");

  const navigate = useNavigate();



  const [error, setError] = useState("");

  const handleProduto = async (e) => {
    e.preventDefault();

    const payload = {
      farmacia,
        nome,
        nome_quimico,
        preco,
        validade,
        quantidade,
        lote,
        label
    };
    console.log("Enviando para a API:", payload);

    try {

      const response = await axios.post(
        "https://api-cadastro-farmacias.onrender.com/produtos/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Navegando para a página inicial do cliente
      navigate("/fornecedor/home");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg); // Mostra mensagem de erro do back-end
      } else {
        setError("Erro ao conectar ao servidor.");
      }
    }
  };




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

      <form onSubmit={handleProduto}>
      <div className="card-container">

<div>

  <label htmlFor="nome-comercial">Nome Comercial do Medicamento</label>
  <input 
  type="text" 
  name='nome-comercial' 
  value={nome}
    onChange={(e) => setNome(e.target.value)}/>

  <label htmlFor="nome-quimico">Nome Quimico do Medicamento</label>
  <input 
  type="text" 
  name='nome-quimico' 
  value={nome_quimico}
  onChange={(e) => setNomequimico(e.target.value)}
    />

</div>

<div className='info-gerais'>

  <div>
    <label htmlFor="qtd">QTD</label>
    <input 
    type="text" 
    name='qtd' 
    value={quantidade}
    onChange={(e) => setQuantidade(e.target.value)}/>
  </div>

  <div>
    <label htmlFor="preco">Preco</label>
    <input 
    type="number" 
    name='preco' 
    value={preco}
    onChange={(e) => setPreco(e.target.value)}/>
  </div>

  <div>
    <label htmlFor="validade">Validade</label>
    <input 
    type="text" 
    name='validade' 
    value={validade}
    onChange={(e) => setValidade(e.target.value)}/>
  </div>

  <div>
    <label htmlFor="lote">Lote</label>
    <input 
    type="text" 
    name='lote' 
    value={lote}
    onChange={(e) => setLote(e.target.value)}/>
  </div>

</div>

<div>

  <label htmlFor="descricao1">Descrição 1</label>
  <input 
  type="text" 
  name='descricao1' 
  value={label}
    onChange={(e) => setLabel(e.target.value)}/>


</div>
{error && <p className="error-msg">{error}</p>}

<button type="submit" className="primary-btn">
Cadastrar novo produto
          </button>
</div>
      </form>

    </div>
  )
}

export default CadastrarProdutos
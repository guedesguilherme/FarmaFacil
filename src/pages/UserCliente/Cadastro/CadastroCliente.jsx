import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./CadastroCliente.css";
import { Helmet } from "react-helmet";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setconfirmasenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleCadastro = async (e) => {
  //   e.preventDefault();

  //   if (senha !== confirmasenha) {
  //     setError("As senhas não coincidem.");
  //     return;
  //   }

  //   const payload = {
  //     nome,
  //     email,
  //     senha,
  //     confirmasenha,
  //   }

  //   console.log(payload)

  //   try {
  //     // Fazendo a requisição para a API
  //     const response = await axios.post("https://api-cadastro-farmacias.onrender.com/usuarios/auth/register", payload);

  //     // Redirecionar para a página de login após cadastro bem-sucedido
  //     navigate("/cliente/entrar");
  //   } catch (error) {
  //     if (error.response) {
  //       setError(error.response.data.msg); // Mostra mensagem de erro do back-end
  //     } else {
  //       setError("Erro ao conectar ao servidor.");
  //     }
  //   }
  // };


  const handleCadastro = async (e) => {
    e.preventDefault();
  
    if (senha !== confirmasenha) {
      setError("As senhas não coincidem.");
      return;
    }
  
    const payload = {
      nome,
      email,
      senha,
      confirmasenha
    };
  
    console.log("Enviando para a API:", payload);
  
    try {
      // Envia com o cabeçalho Content-Type como application/json
      const response = await axios.post(
        "https://api-cadastro-farmacias.onrender.com/usuarios/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Redireciona após sucesso
      navigate("/cliente/entrar");
    } catch (error) {
      if (error.response) {
        console.log("Erro de resposta do servidor:", error.response);
        setError(error.response.data.msg || "Erro ao cadastrar usuário.");
      } else {
        setError("Erro ao conectar ao servidor.");
      }
    }
  };
  
  

  return (
    <div className="container">
      <Helmet>
        <title>Cadastre-se no App</title>
      </Helmet>
      <div className="topo-page">
        <Link to={"/"}>
          <img
            src="../../../../img/icons/back.svg"
            alt="Voltar"
            className="btn-voltar svgIcon"
          />
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/cliente/entrar"}>
          <h3 className="toLogin">Entrar</h3>
        </Link>
      </div>

      <form onSubmit={handleCadastro}>
        <div className="form-control">
          <label htmlFor="nome" className="labels">
            Nome completo
          </label>
          <input
            type="text"
            name="nome"
            placeholder="Insira seu nome aqui"
            className="inputs"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email" className="labels">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            placeholder="Insira seu melhor e-mail aqui"
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha" className="labels">
            Escolha uma senha
          </label>
          <input
            type="password"
            name="senha"
            placeholder="Defina uma senha aqui"
            className="inputs"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="confirmasenha" className="labels">
            Repita a senha
          </label>
          <input
            type="password"
            name="confirmasenha"
            placeholder="Repita a senha definida aqui"
            className="inputs"
            value={confirmasenha}
            onChange={(e) => setconfirmasenha(e.target.value)}
          />

          <div className="manter-conectado">
            <input
              type="checkbox"
              id="manter-conectado-checkbox"
              name="manter-conectado"
              className="checkbox-manter-conectado"
            />
            <label htmlFor="manter-conectado" id="manter-conectado-label">
              Mantenha-me conectado.
            </label>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="primary-btn">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroCliente;
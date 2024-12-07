import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./LoginCliente.css";
import { Helmet } from "react-helmet";

const LoginCliente = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição para a API
      const response = await axios.post("https://api-cadastro-farmacias.onrender.com/usuarios/auth/login", {
        email,
        senha,
      });

      // Salvando o token no localStorage
      const { token } = response.data;
      localStorage.setItem("authToken", token);

      // Navegando para a página inicial do cliente
      navigate("/cliente/home");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg); // Mostra mensagem de erro do back-end
      } else {
        setError("Erro ao conectar ao servidor.");
      }
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Entre no App</title>
      </Helmet>
      <div className="topo-page">
        <Link to={"/"} className="svgIcon">
          <img
            src="../../../../public/img/icons/back.svg"
            alt="Voltar"
            className="btn-voltar"
          />          

        </Link>
        <h2>Entrar</h2>
        <Link to={"/cliente/cadastro"}>
          <h3 className="toCadastro">Cadastrar</h3>
        </Link>
      </div>

      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email" className="labels">
            Insira e-mail cadastrado.
          </label>
          <input
            type="text"
            name="email"
            placeholder="Insira seu e-mail aqui"
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha" className="labels">
            Insira sua senha.
          </label>
          <input
            type="password"
            name="senha"
            placeholder="Insira sua senha aqui"
            className="inputs"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit"  className="primary-btn">
            Entrar
          </button>

          <div id="entrar-com-email">
            <Link to={"/cliente/entrar/email"} className="tertiary-text-btn entrar-email">
              Entrar com e-mail
            </Link>
          </div>
        </div>
      </form>

      <span id="esquece-senha" className="tertiary-text-btn">
        Esqueceu sua senha?
      </span>
    </div>
  );
};

export default LoginCliente;

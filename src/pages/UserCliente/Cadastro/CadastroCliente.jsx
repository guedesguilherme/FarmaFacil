import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./CadastroCliente.css";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      // Fazendo a requisição para a API
      const response = await axios.post("http://localhost:3000/usuarios/auth/register", {
        nome,
        email,
        senha,
      });

      // Redirecionar para a página de login após cadastro bem-sucedido
      navigate("/cliente/entrar");
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
      <div className="topo-page">
        <Link to={"/"}>
          <img
            src="../../../../public/img/icons/back.svg"
            alt="Voltar"
            className="btn-voltar"
          />
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/cliente/entrar"}>
          <h3 className="primary-text-btn">Entrar</h3>
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

          <label htmlFor="confirmaSenha" className="labels">
            Repita a senha
          </label>
          <input
            type="password"
            name="confirmaSenha"
            placeholder="Repita a senha definida aqui"
            className="inputs"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />

          <div className="manter-conectado">
            <input
              type="checkbox"
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

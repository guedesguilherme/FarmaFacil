import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import axios from "axios";
import "./LoginFornecedor.css"

const LoginFornecedor = () => {

  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição para a API
      const response = await axios.post("https://api-cadastro-farmacias.onrender.com/farma/auth/login", {
        cnpj,
        email,
        senha,
      });

      // Salvando o token no localStorage
      const { token } = response.data;
      localStorage.setItem("authToken", token);

      const {farma_id} = response.data;
      localStorage.setItem("id", farma_id)

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
    <div className="container">

      <Helmet>
        <title>Entre no App</title>
      </Helmet>
      <div className="topo-page">

        <Link to={"/fornecedor"}>
          <img src="../../../../public/img/icons/back.svg" alt="Voltar" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Entrar</h2>

        <Link to={"/fornecedor/cadastro"}>
          <h3 className="toCadastro">Cadastrar</h3>  
        </Link>
      </div>


      <form onSubmit={handleLogin}>

        <div className="form-control">

            <label for="email" class="labels">Insira seu e-mail comercial</label>
            <input 
            type="email" 
            name="email" 
            id="" placeholder="Insira seu e-mail aqui" 
            class="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <label for="cnpj" class="labels">Insira seu CNPJ</label>
            <input type="text" 
            name="cnpj" 
            id="" 
            placeholder="Insira seu CNPJ aqui"
            class="inputs"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
             />

            <label for="senha" class="labels">Insira sua senha.</label>
            <input 
            type="password" 
            name="senha" 
            id="" 
            placeholder="Insira sua senha aqui" 
            class="inputs"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}/>

            <div class="manter-conectado">
                <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
            </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit"  className="primary-btn login">
            Entrar
          </button>

        </div>

      </form>

      <span id="esquece-senha" className="tertiary-text-btn">Esqueceu sua senha?</span>

    </div>
  )
}

export default LoginFornecedor
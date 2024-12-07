import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import axios from "axios";
import "./CadastroFornecedor.css"

const CadastroFornecedor = () => {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rede, setRede] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfirmasenha] = useState("");


  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleRedeChange = (event) => {
    setRede(event.target.value); // Atualizando o estado 'rede'
  };

  const handleUFChange = (event) => {
    setUf(event.target.value); // Atualizando o estado 'uf'
  };


  const handleCadastro = async (e) => {
    e.preventDefault();
  
    if (senha !== confirmasenha) {
      setError("As senhas não coincidem.");
      return;
    }
  
    const payload = {
      nome,
      email,
      cnpj,
      rede,
      rua,
      bairro,
      numero,
      cep,
      cidade,
      uf,
      senha,
      confirmasenha
    };
  
    console.log("Enviando para a API:", payload);
  
    try {
      // Envia com o cabeçalho Content-Type como application/json
      const response = await axios.post(
        "https://api-cadastro-farmacias.onrender.com/farma/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Redireciona após sucesso
      navigate("/fornecedor/entrar");
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

        <Link to={"/fornecedor/"}>
          <img src="../../../../public/img/icons/back.svg" alt="" srcset="" className='btn-voltar'/>
        </Link>

        <h2>Cadastrar</h2>

        <Link to={"/fornecedor/entrar"}>
          <h3 className="primary-text-btn toLogin">Entrar</h3>  
        </Link>

      </div>


      <form onSubmit={handleCadastro}>

        <div className="form-control">

            <label for="nome" class="labels">Razão social</label>
            <input 
            type="text" 
            name="nome" 
            id="nome" 
            placeholder="Insira a razão social aqui" 
            class="inputs"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <label for="email" class="labels">E-mail comercial</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Insira o seu e-mail comercial aqui" 
            class="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <label for="rede" class="labels">Sua farmácia é de qual rede?</label>
            <select name="rede" id="rede" class="inputs" value={rede} onChange={handleRedeChange}>
                <option value="" disabled selected>Selecione a rede da sua farmácia</option>
                <option value="Drogasil">Drogasil</option>
                <option value="Drogaria Pague Menos">Drogaria Pague Menos</option>
                <option value="Droga Raia">Droga Raia</option>
                <option value="Drogaria São Paulo">Drogaria São Paulo</option>
                <option value="Ultrafarma">Ultrafarma</option>
            </select>

            <label for="cnpj" class="labels">Insira o CNPJ da sua farmácia abaixo.</label>
            <input 
            type="text" 
            name="cnpj" 
            id="cnpj" 
            placeholder="Insira o seu CNPJ aqui" 
            class="inputs"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            />

            <label for="rua" class="labels">Rua da sua empresa</label>
            <input 
            type="text" 
            name="rua" 
            id="rua"
            placeholder="Insira a rua aqui" 
            class="inputs"
            value={rua}
            onChange={(e) => setRua(e.target.value)}/>

            <label for="bairro" class="labels">Bairro</label>
            <input 
            type="text" 
            name="bairro" 
            id="bairro" 
            placeholder="Insira o bairro aqui" 
            class="inputs"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}/>

            <label for="numero" class="labels">N°</label>
            <input 
            type="text" 
            name="numero" 
            id="numero" 
            placeholder="Insira o número aqui" 
            class="inputs"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}/>

            <label for="cep" class="labels">CEP</label>
            <input 
            type="text" 
            name="cep" 
            id="cep" 
            placeholder="Insira o cep aqui" 
            class="inputs"
            value={cep}
            onChange={(e) => setCep(e.target.value)}/>

            <label for="cidade" class="labels">Cidade</label>
            <input 
            type="text" 
            name="cidade" 
            id="cidade" 
            placeholder="Insira a cidade aqui" 
            class="inputs"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}/>

            <label for="uf" class="labels">Selecione o seu estado</label>
            <select name="uf" id="uf" class="inputs" value={uf} onChange={handleUFChange}>
                <option value="" disabled selected>Selecione seu estado</option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="TO">Tocantins (TO)</option>
            </select>

            <label for="senha" class="labels">Escolha uma senha</label>
                <input 
                type="text" 
                name="senha" 
                id="" 
                placeholder="Defina uma senha aqui" 
                class="inputs"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
    
                <label for="confirmasenha" class="labels">Repita a senha</label>
                <input 
                type="text"
                name="confirmasenha" 
                id="" 
                placeholder="Repita a senha definida aqui" 
                class="inputs"
                value={confirmasenha}
                onChange={(e) => setConfirmasenha(e.target.value)}
                />
    
                <div class="manter-conectado">
                    <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                    <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
                </div>

                {error && <p className="error-msg">{error}</p>}
    
                <button type="submit" className="primary-btn login">
                Cadastrar
                </button>

          
            

        </div>

      </form>


    </div>
  )
}

export default CadastroFornecedor
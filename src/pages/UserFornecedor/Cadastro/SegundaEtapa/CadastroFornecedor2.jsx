import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./CadastroFornecedor2.css";

const CadastroFornecedor2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Acessa os dados enviados da primeira etapa
  const dadosFornecedor = location.state?.dadosFornecedor || {};

  // uf local para os dados da segunda etapa
  const [rua, setrua] = useState(dadosFornecedor.rua || "");
  const [bairro, setBairro] = useState(dadosFornecedor.bairro || "");
  const [numero, setNumero] = useState(dadosFornecedor.numero || "");
  const [cep, setCep] = useState(dadosFornecedor.cep || "");
  const [cidade, setCidade] = useState(dadosFornecedor.cidade || "");
  const [uf, setuf] = useState(dadosFornecedor.uf || "");

  // Atualizar os dados ao avançar para a próxima etapa
  const handleProximaEtapa = () => {
    // Atualiza os dados ao passar para a próxima etapa
    const dadosAtualizados = {
      ...dadosFornecedor,
      rua,
      bairro,
      numero,
      cep,
      cidade,
      uf,
    };

    // Navega para a próxima etapa e envia os dados
    navigate("/fornecedor/cadastro/3", { state: { dadosFornecedor: dadosAtualizados } });
    console.log(dadosAtualizados)
  };

  return (
    <div className="container">
      <Helmet>
        <title>Quase lá...</title>
      </Helmet>

      <div className="topo-page">
        <Link to={"/"}>
          <img src="../../../../public/img/icons/back.svg" alt="" className="btn-voltar svgIcon" />
        </Link>
        <h2>Cadastrar</h2>
        <Link to={"/fornecedor/entrar"}>
          <h3 className="primary-text-btn toCadastro">Entrar</h3>
        </Link>
      </div>

      <h3 id="h3-cadastro-fornecedor">Quase lá...</h3>

      <form>
        <div className="form-control">
          <label htmlFor="rua" className="labels">Endereço da sua empresa</label>
          <input
            type="text"
            name="rua"
            id="rua"
            placeholder="Insira o endereço aqui"
            className="inputs"
            value={rua}
            onChange={(e) => setrua(e.target.value)}
          />

          <label htmlFor="bairro" className="labels">Bairro</label>
          <input
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Insira o bairro aqui"
            className="inputs"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />

          <label htmlFor="numero" className="labels">N°</label>
          <input
            type="text"
            name="numero"
            id="numero"
            placeholder="Insira o número aqui"
            className="inputs"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          <label htmlFor="cep" className="labels">CEP</label>
          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="Insira o CEP aqui"
            className="inputs"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <label htmlFor="cidade" className="labels">Cidade</label>
          <input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Insira a cidade aqui"
            className="inputs"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <label htmlFor="uf" className="labels">Selecione o seu uf</label>
          <select
            name="uf"
            id="uf"
            className="inputs"
            value={uf}
            onChange={(e) => setuf(e.target.value)}
          >
            <option value="" disabled selected>Selecione seu uf</option>
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

          <div className="manter-conectado">
            <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado" />
            <label htmlFor="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
          </div>

          <button type="button" onClick={handleProximaEtapa} className="primary-btn login">
            Próxima etapa
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroFornecedor2;

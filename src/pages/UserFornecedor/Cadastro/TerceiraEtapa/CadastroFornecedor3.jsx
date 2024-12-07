// import { useNavigate, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';
// import axios from 'axios';
// import './CadastroFornecedor3.css';

// const CadastroFornecedor3 = () => {

//   const location = useLocation();

//   const dadosFornecedor = location.state?.dadosFornecedor || {};

//   const [senha, setSenha] = useState("");
//   const [confirmasenha, setconfirmasenha] = useState("");
//   const navigate = useNavigate();

//   const handleCadastroFinal = async (e) => {
//     e.preventDefault();

//     // Verificando se as senhas coincidem
//     if (senha !== confirmasenha) {
//       alert("As senhas não coincidem!");
//       return;
//     }

//     // Montando o payload com todos os dados
//     const payload = {
//       ...dadosFornecedor, // Aqui você inclui todos os dados das etapas anteriores
//       senha,
//       confirmasenha,
//     };

//     // Imprimindo os dados no console para ver o que está sendo enviado
//     console.log("Dados que estão sendo enviados para a API:", payload);

//     try {
//       // Enviar todos os dados de uma vez para a API
//       const response = await axios.post("https://api-cadastro-farmacias.onrender.com/farma/auth/register", payload);

//       if (response.status === 200) {
//         // Navegar para a página inicial após o cadastro
//         navigate("/fornecedor/home");
//       }
//     } catch (error) {
//       console.error("Erro ao realizar o cadastro final: ", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Última etapa do cadastro</h2>

//       <form onSubmit={handleCadastroFinal}>
//         <label htmlFor="senha" className="labels">Escolha uma senha</label>
//         <input
//           type="password"
//           name="senha"
//           placeholder="Defina uma senha aqui"
//           className="inputs"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//         />

//         <label htmlFor="confirmasenha" className="labels">Repita a senha</label>
//         <input
//           type="password"
//           name="confirmasenha"
//           placeholder="Repita a senha definida aqui"
//           className="inputs"
//           value={confirmasenha}
//           onChange={(e) => setconfirmasenha(e.target.value)}
//         />

//         <button type="submit" className="primary-btn login">Cadastrar</button>
//       </form>
//     </div>
//   );
// };

// export default CadastroFornecedor3;

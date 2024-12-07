import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import "./TelaCompra.css";

const TelaCompra = () => {
  const [produto, setProduto] = useState(null);  // Dados do produto
  const [loading, setLoading] = useState(true);  // Carregando?
  const [error, setError] = useState(null);  // Erro se ocorrer
  const [isBuying, setIsBuying] = useState(false);  // Para controlar o estado do botão "Comprar"
  const [sucess, setSucess] = useState(false)
  const { id } = useParams();  // Pegando o id da URL

  useEffect(() => {
    // Função para buscar o produto
    const fetchProduto = async () => {
      console.log("ID do Produto:", id);  // Imprime o id do produto no console
      try {
        const response = await axios.get(`https://api-cadastro-farmacias.onrender.com/produtos/${id}`);
        console.log("Dados do Produto Recebidos:", response.data);  // Imprime os dados do produto no console
        setProduto(response.data.produto);  

      } catch (err) {
        setError("Produto não encontrado");
        console.error("Erro ao buscar o produto:", err);  // Logando o erro no console para diagnóstico
      } finally {
        setLoading(false);  // Finaliza o carregamento
      }
    };

    fetchProduto();  // Chamando a função para buscar o produto
  }, [id]);  // Dependência do id, sempre que mudar o id ele refaz a requisição

  // Função para atualizar a quantidade do produto
  const handleCompra = async () => {
    if (produto.quantidade > 0) {
      setIsBuying(true); // Bloqueia o botão durante a requisição
      try {
        const updatedProduto = { quantidade: produto.quantidade - 1 };
        const response = await axios.patch(`https://api-cadastro-farmacias.onrender.com/produtos/${produto._id}`, updatedProduto); // Faz a requisição PUT para atualizar a quantidade
        console.log("Produto atualizado:", response.data); // Imprime a resposta da requisição no console
        setProduto(preProduto => ({
            ...preProduto,
            quantidade: preProduto.quantidade - 1
        }));

        setSucess(true)


      } catch (err) {
        console.error("Erro ao atualizar a quantidade do produto:", err); // Loga qualquer erro que ocorra
      } finally {
        setIsBuying(false); // Libera o botão após a requisição
      }
    } else {
      alert("Não há mais estoque disponível para este produto.");
    }
  };

  // Se estiver carregando, exibe "Carregando..."
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Se houver um erro, exibe a mensagem de erro
  if (error) {
    return <p>{error}</p>;
  }

  // Se o produto estiver carregado, exibe as informações
  return (
    <div className="container-compra-fornecedor">
      <Helmet>
        <title>Finalize sua Compra</title>
      </Helmet>
      <div className="heade-compra">
        <Link to="/cliente/home">
          <img src="../../../../public/img/icons/back.svg" alt="Voltar" className="btn-voltar svgIcon" />
        </Link>
        <h2>Finalize a Compra</h2>
      </div>

      <div className="card card-container">
        <img
          src={produto.imagem || "../../../../public/img/produto-selecionado.svg"} // Exibe a imagem do produto ou uma imagem padrão
          alt={`Imagem do produto ${produto.nome}`}
        />
        <h3>{produto.nome}</h3>
        <p>{produto.label || "Descrição não disponível"}</p> {/* Exibe a descrição do produto ou uma mensagem padrão */}

        <div className="preco-e-btn">
          <p>R$ {produto.preco}</p>
          {/* Botão "Comprar" que chama a função handleCompra */}
          <button 
            className="primary-btn"
            onClick={handleCompra}
            disabled={isBuying} // Desabilita o botão enquanto a requisição está sendo processada
          >
            {isBuying ? "Comprando..." : "Comprar"} {/* Exibe "Comprando..." enquanto a requisição está sendo feita */}
          </button>
        </div>
        {sucess && (
          <div className="success-message">
            Compra realizada com sucesso
          </div>
        )}
      </div>
    </div>
  );
};

export default TelaCompra;

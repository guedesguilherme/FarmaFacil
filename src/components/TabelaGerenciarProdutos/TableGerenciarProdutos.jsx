import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./TableGerenciarProdutos.css"

const TableGerenciarProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const farma_id = localStorage.getItem('id')

        const fetchProdutos = async () => {
            try {
                const response = await axios.get(`https://api-cadastro-farmacias.onrender.com/produtos/farmacia/${farma_id}`);
                console.log('Resposta da API:', response.data); // Adicione este log
                if (Array.isArray(response.data)) {
                    setProdutos(response.data);
                } else {
                    console.error('Dados da API não são um array:', response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div className='container-home-fornecedor'>

        <div className="header">
        <Link to={"/fornecedor/home"}>
          <img src="../../../../public/img/icons/back.svg" className='svgIcon' alt="" />
        </Link>
        </div>
            <h2 className='headline-estoque-fornecedor'>Gerencie seu estoque</h2>
            <table className="tabela-gerenciar-produtos">               
                <thead>
                <h3>Produtos</h3>
                <br />
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto._id}>
                            <td>{produto.nome}</td>
                            <td>R${produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td>
                                <Link to={`/produtos/${produto._id}`}>
                                    <img src="../../../public/img/icons/clipboard.svg" alt="Detalhes" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableGerenciarProdutos;

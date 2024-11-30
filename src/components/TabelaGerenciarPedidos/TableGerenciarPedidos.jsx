import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./TableGerenciarPedidos.css";

const TableGerenciarPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                // Requisição para obter os pedidos
                const response = await axios.get('http://localhost:3000/pedidos');  // Certifique-se de usar a URL correta da sua API
                console.log('Resposta da API:', response.data); // Para debug

                if (Array.isArray(response.data)) {
                    setPedidos(response.data); // Atualiza o estado com os dados dos pedidos
                } else {
                    console.error('Dados da API não são um array:', response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar pedidos:', error);
            }
        };

        fetchPedidos(); // Chama a função para buscar os pedidos ao carregar o componente
    }, []);

    return (
        <div className='container-home-fornecedor'>
            <div className="header">
                <Link to={"/fornecedor/home"}>
                    <img src="../../../../public/img/icons/back.svg" alt="Voltar" />
                </Link>
            </div>

            <h2 className='headline-estoque-fornecedor'>Gerencie seus pedidos</h2>

            <table className="tabela-gerenciar-pedidos">
                <thead>
                    <h3>Pedidos</h3>
                    <br />
                    <tr>
                        <th>Endereço</th>
                        <th>Status</th>
                        <th>Preço Total</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeando os pedidos e exibindo-os */}
                    {pedidos.map((pedido) => (
                        <tr key={pedido._id}>
                            <td>{pedido.endereco1}, {pedido.city}, {pedido.pais}</td> {/* Exibe o endereço completo */}
                            <td>{pedido.status}</td> {/* Exibe o status do pedido */}
                            <td>R${pedido.precoTotal}</td> {/* Exibe o preço total do pedido */}
                            <td>{new Date(pedido.dataPedido).toLocaleDateString()}</td> {/* Exibe a data do pedido */}
                            <td>
                                <Link to={`/pedidos/${pedido._id}`}>
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

export default TableGerenciarPedidos;

import { Link } from "react-router-dom";

import "./TelaCompra.css";

import React from 'react'

const TelaCompra = () => {
    return (
        <div className='container-compra-fornecedor'>

            <div className="heade-compra">
                <Link to={"/cliente/home"}>
                    <img src="../../../../public/img/icons/back.svg" alt="Voltar" srcset="" className='btn-voltar' />
                </Link>
                <h2>Finalize a Compra</h2>
            </div>

            <div className="card card-container">
                <img src="../../../../public/img/produto-selecionado.svg" alt="Imagem Remédio Benegrip" />
                <h3>Benegrip</h3>
                <p>Dipirona Sódica. Bom para Gripes Leves.</p>

                <div className="preco-e-btn">
                    <p>R$ 100,00</p>
                    <Link className="primary-btn">Comprar</Link>
                </div>

            </div>


        </div>
    )
}

export default TelaCompra
import TableGerenciarProdutos from '../../../components/TabelaGerenciarProdutos/TableGerenciarProdutos'
import { Helmet } from "react-helmet";

import React from 'react'

const GerenciarProdutos = () => {
  return (
    <div>GerenciarProdutos
        <Helmet>
          <title>Gerencie seus produtos</title>
        </Helmet>
        <TableGerenciarProdutos />
    </div>
  )
}

export default GerenciarProdutos
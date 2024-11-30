import TableGerenciarPedidos from '../../../components/TabelaGerenciarPedidos/TableGerenciarPedidos'

import React from 'react'

import './GerenciarPedidos.css'

const GerenciarPedidos = () => {
  return (
    <div className='container-pedidos-fornecedor'>

      <TableGerenciarPedidos />

      <div className='options-footer'>

        <div>

          <img src="../../../../public/img/icons/archive-box--box-content-banker-archive-file.svg" alt="" />
          <p>Pendentes</p>

        </div>

        <div>
          <img src="../../../../public/img/icons/check--check-form-validation-checkmark-success-add-addition-tick.svg" alt="" />
          <p>Concluídos</p>
        </div>

      </div>

    </div>
  )
}

export default GerenciarPedidos
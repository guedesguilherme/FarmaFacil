import { Link } from "react-router-dom";

import React from 'react'

const LoginFornecedor = () => {
  return (
    <div>LoginFornecedor

      <Link to={"/fornecedor/home"}>
        Cadastrar minha farmácia!
      </Link>
    </div>
    
  )
}

export default LoginFornecedor
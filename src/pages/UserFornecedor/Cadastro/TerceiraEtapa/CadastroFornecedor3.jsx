import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import React from 'react'

const CadastroFornecedor3 = () => {
    return (
        <div className="container">
    
          <Helmet>
            <title>Última etapa!</title>
          </Helmet>
          <div className="topo-page">
    
            <Link to={"/"}>
              <img src="../../../../public/img/icons/back.svg" alt="" srcset="" className='btn-voltar'/>
            </Link>
    
            <h2>Cadastrar</h2>
    
            <Link to={"/fornecedor/entrar"}>
              <h3 className="primary-text-btn">Entrar</h3>  
            </Link>
    
          </div>

          <h3 id="h3-cadastro-fornecedor">Quase lá...</h3>
          <p>
            Defina uma senha difícil e não compartilhe ela com ninguém!
          </p>
    
          <form action="">
    
            <div className="form-control">
    
                <label for="senha" class="labels">Escolha uma senha</label>
                <input type="text" name="senha" id="" placeholder="Defina uma senha aqui" class="inputs"/>
    
                <label for="senha" class="labels">Repita a senha</label>
                <input type="text" name="senha" id="" placeholder="Repita a senha definida aqui" class="inputs"/>
    
                <div class="manter-conectado">
                    <input type="checkbox" name="manter-conectado" className="checkbox-manter-conectado"/>
                    <label for="manter-conectado" id="manter-conectado-label">Mantenha-me conectado.</label>
                </div>
    
                <Link to={"/cliente/home"} className="primary-btn">
                  Cadastrar
                </Link>
    
            </div>
    
          </form>
        </div>
      )
}

export default CadastroFornecedor3
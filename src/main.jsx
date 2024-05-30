//Imports gerais
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'

//------------------

//Import das pages

//Import do index
import Index from './pages/Inicio/Index.jsx'
import IndexFornecedor from './pages/Inicio/IndexFornecedor.jsx'

//Import das pages do cliente
import HomeCliente from "./pages/UserCliente/Home/HomeCliente.jsx"
import CadastroCliente from './pages/UserCliente/Cadastro/CadastroCliente.jsx'
import LoginCliente from './pages/UserCliente/Login/LoginCliente.jsx'

//Import das pages do fornecedor
import HomeFornecedor from "./pages/UserFornecedor/Home/HomeFornecedor.jsx"
import CadastroFornecedor from "./pages/UserFornecedor/Cadastro/PrimeiraEtapa/CadastroFornecedor.jsx"
import CadastroFornecedor2 from "./pages/UserFornecedor/Cadastro/SegundaEtapa/CadastroFornecedor2.jsx"
import LoginFornecedor from './pages/UserFornecedor/Login/LoginFornecedor.jsx'

//-----------------

//Definindo as rotas para cada page
const router = createBrowserRouter([

  {
    element: <App/>,
    children: [

      //Tela inicial
      {
        path: "/",
        element: <Index/>
      },
      {
        path: "/fornecedor",
        element: <IndexFornecedor/>
      },

      //Rotas do cliente
      {
        path: "/cliente/home",
        element: <HomeCliente/>
      },
      {
        path: "/cliente/cadastro",
        element: <CadastroCliente/>
      },
      {
        path: "/cliente/entrar",
        element: <LoginCliente/>
      },

      //Rotas do fornecedor
      {
        path: "/fornecedor/home",
        element: <HomeFornecedor/>
      },

      {
        path: "/fornecedor/cadastro",
        element: <CadastroFornecedor />
      },
        {
          path: "/fornecedor/cadastro/2",
          element: <CadastroFornecedor2 />
        },
      {
        path: "/fornecedor/entrar",
        element: <LoginFornecedor/>
      },

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

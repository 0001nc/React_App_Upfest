
/*
- - - - - - - -
QUICK START
- - - - - - - -

1. FLUXO 1 IMPLEMENTADO
2. FLUXO 2 IMPLEMENTADO
3. FLUXO 3 IMPLEMENTADO

4. FLUXO 4 NÃO IMPLEMENTADO
5. FLUXO 5 NÃO IMPLEMENTADO

6. LISTA DE PÁGINAS UI NÃO CONCLUÍDAS A TEMPO DA ENTREGA:
        Confirmação Compra  - Falta implementar Modal
        Erro Compra         - Falta implementar Modal

7. LISTA DE PÁGINAS UI NÃO IMPLEMENTADAS A TEMPO DA ENTREGA:
        Cashless
        Cashless Carregado
 */





import React, {useContext, useEffect} from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


import Home from './Paginas/Home/Home'
import Festival from './Paginas/Festival/Festival'
import Pagamentos from './Paginas/Pessoal/Pagamentos'
import Search from "./Paginas/Search/Search"
import Autenticacao from "./Paginas/Autenticacao/Autenticacao"
import SucessoCompra from "./Paginas/SucessoCompra/SucessoCompra";
import Bilhetes from "./Paginas/Bilhetes/Bilhetes";
import Artista from "./Paginas/Artista/Artista";
import Splash from "./Paginas/Splash/Splash";
import ConfirmacaoCompra from "./components/ConfirmacaoCompra/ConfirmacaoCompra";
import ErroCompra from "./Paginas/ErroCompra/ErroCompra";
import PessoalVazio from "./Paginas/PessoalVazio/PessoalVazio";

// CONTEXTO SETUP
import {createContext, useState} from 'react';
export const ContextoLogIn = createContext();
export const ContextoCredito = createContext();
export const ContextoVendas = createContext();
export const ContectoFavoritos = createContext();

function App() {
    const valorContextoCredito = 50;
    const valorContextoVendas = 500;


    const [userData, setUserData] = useState({});  {/* VARIAVEIS DO LOG-IN  */}


    // SPLASH State
    const [isLoading, setIsLoading] = useState(true);

    // SPLASH DELAY E CHAMADA DA PAGINA
    useEffect(() =>{
        const pagina = () =>{
            setTimeout(()=>{
                setIsLoading(false);
            }, 3000);
        };
        pagina();
    }, [])




  return (
      isLoading ? ( <Splash /> ) : (
        <ContextoLogIn.Provider value={{userData, setUserData}}>
            <ContextoCredito.Provider value={valorContextoCredito}>
                <ContextoVendas.Provider value={valorContextoVendas}>
                    <BrowserRouter>
                      <div className="App">
                            <Switch>
                                <Route path={"/autenticacao"} component={Autenticacao} />
                                <Route path={"/home"} component={Home} />
                                <Route path={"/search"} component={Search} />
                                <Route path={"/pessoal"} component={Pagamentos} />
                                <Route path={"/festival/:id_festival"} component={Festival} />
                                <Route path={"/confirmacaoCompra"} component={ConfirmacaoCompra} />
                                <Route path={"/sucessoCompra"} component={SucessoCompra} />
                                <Route path={"/pessoalVazio"} component={PessoalVazio} />
                                <Route path={"/erroCompra"} component={ErroCompra} />
                                <Route path={"/bilhetes"} component={Bilhetes} />
                                <Route path={"/artista/:id_artista"} component={Artista} />
                                <Redirect to={"/autenticacao"}/>
                            </Switch>

                      </div>
                    </BrowserRouter>
                </ContextoVendas.Provider>
            </ContextoCredito.Provider>
        </ContextoLogIn.Provider>
      )
    );

}

export default App;


import React, {useState} from "react";
import './Autenticacao.scss'

// USAR CONTEXTO
import {useContext} from 'react';
import {ContextoLogIn} from "../../App";
import ValidarDados from "../../components/ValidarDados/ValidarDados";

function Autenticacao(){
    useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
    const userData = useContext(ContextoLogIn);

    return (
        <div className="Autenticacao">
            <ValidarDados/>
        </div>
    );
}

export default Autenticacao;
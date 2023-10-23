import React, {createContext} from "react";
import CardFestivalComprado from "../../components/CardFestivalComprado/CardFestivalComprado";
import Venda from "../../components/Venda/Venda";
import Saldo from "../../components/Saldo/Saldo";
import CardFestival from "../../components/CardFestival/CardFestival";
import Menu from "../../components/Navegacao/Menu";
import {Link} from "react-router-dom";
import TitulosGrandes from "../../components/TitulosGrandes/TitulosGrandes";

// API
import axiosFest from "../../components/Api/ApiUpFest";

// USAR CONTEXTO
import {useContext, useState, useEffect} from 'react';

import {ContextoLogIn} from "../../App";
import {ContextoCredito} from "../../App";
import {ContextoVendas} from "../../App";

function Home(props){
    const {userData } = useContext(ContextoLogIn);
    const [sugestoes, setSugestoes] = useState(null);
    const vendas = useContext(ContextoVendas);
    const credito = useContext(ContextoCredito);


    useEffect(() => {
        axiosFest.get("evento/listar", {params: {numero_resultados: 3, pagina: 0}})
            .then(res => setSugestoes(res.data.eventos));
    }, [])

    if (!sugestoes) {
        return (
            <div className={"Home"}>A carregar</div>
        )
    }
    return (
        <div className="Home">

            <CardFestivalComprado titulo={`Bom dia ${userData.nome}`}/>
            <Venda vendas={vendas.value} />
            <Saldo saldo={credito.value}/>

            <TitulosGrandes  titulosgrandes={"Sugestões"} />

            {sugestoes.map((e)=>{
            return(
                    <Link to={`/festival/${e.id}`}>
                        <CardFestival imagem={e.imagem} preco={e.preco_desde} nome={e.designacao} data={e.data} local={e.local}/>
                    </Link>
                )
            })}
            <Menu/>

        </div>
    );
}

export default Home;
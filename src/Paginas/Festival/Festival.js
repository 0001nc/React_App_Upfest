import React, {useEffect} from "react";
import './Festival.scss'

import Pesquisa_Apresentacao from "../../components/Pesquisa_Apresentacao/Pesquisa_Apresentacao";
import Linha from "../../components/Linha/Linha";
import Informacao from "../../components/Informacao/Informacao";
import Titulo from "../../components/Titulos/Titulo"
import Concertos from "../../components/Concerto/Concertos";
import BilheteDisponivel from "../../components/Bilhete/BilheteDisponivel";
import Menu from "../../components/Navegacao/Menu";




// REQUESICAO API
import axiosFest from "../../components/Api/ApiUpFest";


// USAR CONTEXTO
import {useContext, useState} from 'react';
import {ContextoLogIn} from "../../App";
import {Link, useParams} from "react-router-dom";
import ListFestival from "../../components/ListFestival/ListFestival";

function Festival() {
    const {id_festival} = useParams()
    useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
    const userData = useContext(ContextoLogIn);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);      // OVERLAY

    const [detalhes, setDetalhes] = useState(null);
    const [concertos, setConcertos] = useState(null);
    const [bilhetes, setBilhetes] = useState(null);

    const {id_artista} = useParams();
    const [artista, setArtista] = useState(null);

    useEffect(() => {
        console.log("art",id_festival)
        axiosFest.get(`/evento/${id_festival}/detalhes`)
            .then((res) => setDetalhes(res.data.evento))
            .catch(e => console.log("Erro", e))

        axiosFest.get(`/evento/${id_festival}/concertos/listar`, {params : {pagina : 0, numero_resultados : 3}})
            .then((res) => setConcertos(res.data.concertos))
            .catch(e => console.log("Erro", e))

        axiosFest.get(`/evento/${id_festival}/series_bilhetes/listar`)
            .then((res) => setBilhetes(res.data.series))
            .catch(e => console.log("Erro", e))


        axiosFest.get(`/artistas/${id_artista}/detalhes`)
            .then((res) => setArtista(res.data.artista))
            .catch(e => console.log("Erro", e))

    }, []);

    if(!(detalhes && concertos && bilhetes)){
        return(
            <div>A carregar</div>
        )
    }

    return(

        <div className="Festival">

            <Pesquisa_Apresentacao image={detalhes.imagem} nome={detalhes.designacao} data={detalhes.data} local={detalhes.local}/>
            <Linha/>
            <Titulo titulo={"Concertos"}/>
            {
                concertos.length === 0 && <p className="color"> Sem concertos confirmados</p>
            }
            {
                concertos.map((c)=>
                    <Link to={`/artista/${c.artista_id}`}>
                        <Concertos imagem={c.imagem} titulo={c.artista} data={c.data_hora_inicio} morada={c.palco}/>
                    </Link>
                )
            }
            <Linha/>
            <Titulo titulo={"Informações"}/>
            <Informacao informacoes={detalhes.descricao}/>
            <Linha/>
            <Titulo titulo={"Bilhetes"}/>

            {
            bilhetes.map((b)=>
                <BilheteDisponivel titulo={b.designacao} preco={b.custo} data={(b.limite_vendas).slice(0,10)} disponivel={b.disponivel}/>
            )}

            <Menu/>
        </div>


    );
}

export default Festival;
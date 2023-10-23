import React, {useEffect, useState} from "react";
import Titulo from "../../components/Titulos/Titulo"
import Concertos from "../../components/Concerto/Concertos";
import ListFestival from "../../components/ListFestival/ListFestival";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import Menu from "../../components/Navegacao/Menu";
import axiosFest from "../../components/Api/ApiUpFest";
import {Link} from "react-router-dom";


function Search() {
    const [filtro, setFiltro] = useState("")        // VARIAVEL E FILTRAGEM
    const [filtrado, setFiltrado] = useState([])    // LISTA VAZIA PORQUE INICIA SEM NADA FILTRADO
    const [eventos, setEventos] = useState([]);
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        axiosFest.get(`/evento/listar`)
            .then((res) => setEventos(res.data.eventos))
            .catch(e => console.log("Erro", e))

        axiosFest.get(`/artistas/listar`, {params : {pagina : 0, numero_resultados : 150}})
            .then((res) => setArtistas(res.data.artistas))
            .catch(e => console.log("Erro", e))

        const filtroLower = filtro.toLowerCase();

        const eventosFiltrados = eventos.filter((evento) => {
            return evento.designacao.toLowerCase().includes(filtroLower);
        });

        const artistasFiltrados = artistas.filter((artista) => {
            return artista.nome.toLowerCase().includes(filtroLower);
        });

        const listaFiltrada = {
            eventos: eventosFiltrados,
            artistas: artistasFiltrados
        }
        setFiltrado(listaFiltrada);
    }, [filtro, artistas, eventos]);

    if(filtro){
        return(
        <div className="Pesquisa">
            <BarraPesquisa  setFiltro={setFiltro}/>
            <Titulo titulo={"Festivais"}/>
            {filtrado.eventos.map((f)=> (
                <Link to={`/festival/${f.id}`}>
                    <ListFestival key={f.id} imagem={f.imagem} titulo={f.designacao} data={f.data} morada={f.local}/>
                </Link>
            ))}

            <Titulo titulo={"Artistas"}/>
            {filtrado.artistas.map((a)=> (
                    <Link to={`/artista/${a.id}`}>
                        <Concertos key={a.id} imagem={a.imagem} titulo={a.nome} data={""}/>
                    </Link>
            ))}
            <Menu/>
        </div>
        )
    }


    return(
        <div className="Pesquisa">
            <BarraPesquisa  setFiltro={setFiltro}/>
            <Titulo titulo={"Festivais"}/>
            {eventos.map((f)=> (
                <Link to={`/festival/${f.id}`}>
                    <ListFestival key={f.id} imagem={f.imagem} titulo={f.designacao} data={f.data} morada={f.local}/>
                </Link>
            ))}

            <Titulo titulo={"Artistas"}/>
            {artistas.map((a)=>(
                <Link to={`/artista/${a.id}`}>
                    <Concertos key={a.id} imagem={a.imagem} titulo={a.nome} data={""}/>
                </Link>
            ))}

            <Menu/>
        </div>
    );
}

export default Search;
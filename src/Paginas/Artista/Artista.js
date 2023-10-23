

import './Artista.scss';
import {Link, useParams} from "react-router-dom";
import TitulosGrandes from "../../components/TitulosGrandes/TitulosGrandes";
import ListFestival from "../../components/ListFestival/ListFestival";
import Informacao from "../../components/Informacao/Informacao";
import BannerArtista from "../../components/BannerArtista/BannerArtista";
import Menu from "../../components/Navegacao/Menu";

// - - - -
import React, {useEffect, useState} from "react";
import axiosFest from "../../components/Api/ApiUpFest";



function Artista(props) {
        const {id_artista} = useParams();
        const [artista, setArtista] = useState(null);
        const [concertosArtista, setConcertosArtista] = useState(null);

        const [carregado, setCarregado] = useState(false)

  async  function adicionaIdFestival (concertos) {
        let idFestival;
        const concertosComIdFestival = await concertos.map( async (c) => {
            await axiosFest.get("/evento/listar", {params: {numero_resultados:1, pagina: 0, pesquisa: c.evento}})
                .then((res) => {
                    console.log(res.data)
                    console.log(res.data.eventos[0].id)
                    idFestival = res.data.eventos[0].id
                })

            const con = {
                ...c,
                idFestival
            }
            console.log("con",con)
            return {
                ...c,
                idFestival
            }
        })
      setCarregado(true)
        return concertosComIdFestival
    }


    useEffect(() => {
        axiosFest.get(`/artistas/${id_artista}/detalhes`)
            .then((res) => setArtista(res.data.artista))
            .catch(e => console.log("Erro", e))

        axiosFest.get(`/artistas/${id_artista}/concertos`, { params: { pagina: 0, numero_resultados: 5 } })
            .then(async (res) => {
                const concertosCorrigidos = res.data.concertos;


                const fetchEventPromises = concertosCorrigidos.map(concerto => {
                    return axiosFest.get("/evento/listar", { params: { numero_resultados: 1, pagina: 0, pesquisa: concerto.evento } })
                        .then(eventRes => {

                            return { ...concerto, eventId: eventRes.data.eventos[0].id };
                        })
                        .catch(e => {
                            console.log("Erro fetching event", e);
                            return concerto;
                        });
                });

                const concertosWithEventIds = await Promise.all(fetchEventPromises);

                setConcertosArtista(concertosWithEventIds);
            })
            .catch(e => console.log("Erro", e));
    }, [id_artista]);


        if(!artista || !concertosArtista ){
            return(
                <div>A carregar</div>
            )
        }

    return(

        <div>
            <BannerArtista key={artista.artista_id}  titulo={artista.nome} data="Artista" imagem={artista.imagem} />

            <TitulosGrandes titulosgrandes={"Próximos concertos"} />

            {concertosArtista.map((e)=>{
            return(
                <Link to={`/festival/${e.eventId}`} key={e.artista_id} >
                    <ListFestival  key={e.artista_id}  titulo={e.evento} data={(e.data_hora_inicio)} morada={e.palco} imagem={e.imagem}/>
                </Link>
            )
            })}

            <TitulosGrandes titulosgrandes={"Sobre"} />

            <Informacao key={artista.id}  informacoes={artista.biografia}/>
            <Menu/>
        </div>


    );
}

export default Artista;

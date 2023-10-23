import React from "react";
import './ListFestival.scss'


function ListFestival(props) {
    const dataEvento = new Date(props.data);
    const mes = dataEvento.toLocaleString("pt-PT", { month: 'long'});
    const dia = dataEvento.getDate();
    const ano = dataEvento.getFullYear();
    const hora = dataEvento.getUTCHours();
    const minutos = dataEvento.getUTCMinutes().toString();
    let dataConvertida = "";

    if(minutos.length === 1) {
        dataConvertida = dia + " " + mes + " " + ano + ", " + hora + "h0" + minutos;
    } else {
        dataConvertida = dia + " " + mes + " " + ano + ", " + hora + "h" + minutos;
    }

    return(

        <div className="concertoFavoritoQdr-info">

            <div className="concertoFavoritoQdr-imagem">
                <img src={`https://upfest.site/public/${props.imagem}`} alt="" className="imagem"/>
                <div className="gradient"></div>
            </div>

            <div className="info">
                <div className="concertoFavoritoQdr-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="concertoFavoritoQdr-data">
                    <span>{dataConvertida}</span>
                </div>

                <div className="concertoFavoritoQdr-morada">
                    <span>{props.morada}</span>
                </div>
            </div>

            <div className="coracao2-box"></div>
            <a href="#" className="concerto1-coracao" alt=""></a>

        </div>

    );
}

export default ListFestival;
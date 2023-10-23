import React from "react";
import './Concertos.scss'

function Concertos(props) {
    let valor = "";

    if(props.data !== "") {
        const dataEvento = new Date(props.data);
        const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
        const indiceDia = dataEvento.getUTCDay();
        const diaSemana = diasDaSemana[indiceDia];
        const hora = dataEvento.getUTCHours();
        const minutos = dataEvento.getUTCMinutes().toString();

        if(minutos.length === 1) {
            valor = diaSemana + " " + hora + "h0" + minutos;
        } else {
            valor = diaSemana + " " + hora + "h" + minutos;
        }
    } else {
        valor = "Artista";
    }


    return(

        <div className="concerto1-info">

            <div className="concerto1-imagem">
                <img src={`https://upfest.site/public/${props.imagem}`} alt="" className="imagem"/>
                <div className="gradient"></div>
            </div>

            <div className="info">
                <div className="concerto1-titulo">
                    <span>{props.titulo.substring(0, 29)}</span>
                </div>

                <div className="concerto1-data">
                    <span>{valor}</span>
                </div>

                <div className="concerto1-morada">
                    <span>{props.morada}</span>
                </div>
            </div>

            <div className="coracao2-box"></div>
            <a href="#" className="concerto1-coracao" alt=""></a>

        </div>

    );
}

export default Concertos;
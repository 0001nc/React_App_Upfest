import React from "react";
import './ConcertosEstaticos.scss'

function ConcertosEstaticos(props) {

    return(

        <div className="concertoEstatico-info">

            <div className="concertoEstatico-imagem">
                <img src={props.imagem} alt="" className="imagem"/>
                <div className="gradient"></div>
            </div>

            <div className="info">
                <div className="concertoEstatico-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="concertoEstatico-data">
                    <span>{props.data}</span>
                </div>

                <div className="concertoEstatico-morada">
                    <span>{props.morada}</span>
                </div>
            </div>

            <div className="coracao2-box"></div>
            <a href="#" className="concerto1-coracao" alt=""></a>

        </div>

    );
}

export default ConcertosEstaticos;
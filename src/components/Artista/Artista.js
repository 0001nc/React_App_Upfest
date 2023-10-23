import React from "react";
import './Artista.scss'

function Artista(props) {

    return(

        <div className="concertoFavorito-info">

            <div className="concertoFavorito-imagem">
                <img src={props.imagem} alt="" className="imagem"/>
                <div className="gradient"></div>
            </div>

            <div className="info">
                <div className="concertoFavorito-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="concertoFavorito-data">
                    <span>{props.data}</span>
                </div>

                <div className="concertoFavorito-morada">
                    <span>{props.morada}</span>
                </div>
            </div>

            <div className="coracao2-box"></div>
            <a href="#" className="concerto1-coracao" alt=""></a>

        </div>

    );
}

export default Artista;
import './Artista_Apresentacao.scss';
import React from "react";

function Artista_Apresentacao(props) {

    return(
    <div className="artista-info">

        <div className="artista-imagem">
            <img src={props.imagem} alt="" className="imagem"/>
            <div className="gradient"></div>
        </div>

        <div className="info">
            <div className="artista-titulo">
                <span>{props.titulo}</span>
            </div>

            <div className="artista-data">
                <span>{props.data}</span>
            </div>

            <div className="artista-morada">
                <span>{props.morada}</span>
            </div>
        </div>

        <div className="coracao2-box"></div>
        <a href="#" className="concerto1-coracao" alt=""></a>

    </div>)

}

export default Artista_Apresentacao;
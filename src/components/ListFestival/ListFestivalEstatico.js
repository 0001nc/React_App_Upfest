import React from "react";
import './ListFestival.scss'


function ListFestival(props) {

    return(

        <div className="concertoFavoritoQdr-info">

            <div className="concertoFavoritoQdr-imagem">
                <img src={props.imagem} alt="" className="imagem"/>
                <div className="gradient"></div>
            </div>

            <div className="info">
                <div className="concertoFavoritoQdr-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="concertoFavoritoQdr-data">
                    <span>{props.data}</span>
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
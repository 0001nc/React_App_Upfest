import './PagamentoPendente.scss';
import React from "react";

function Pendentes(props) {

    return(

        <div className="pendente-info">


            <div className="pendente-imagem">
                <div className="gradient"></div>
            </div>

            <div className="bilhete-box"></div>
            <div className="bilhete-icon-bilhetes"></div>

            <div className="info">
                <div className="pendente-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="pendente-estado">
                    <span>{props.estado}</span>
                </div>

                <div className="pendente-data">
                    <span>{props.data}</span>
                </div>

            </div>

            <div className="pendente-label">
                <span>{props.preco}</span>
            </div>
        </div>

    );

}

export default Pendentes;
import './Pagamento.scss';
import React from "react";

function Pagamento(props) {

    return(

        <div className="pagamento-info">


            <div className="pagamento-imagem">
                <div className="gradient"></div>
            </div>

            <div className="bilhete-box"></div>
            <div className="bilhete-icon-bilhetes"></div>

            <div className="info">
                <div className="pagamento-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="pagamento-estado">
                    <span>{props.estado}</span>
                </div>

                <div className="pagamento-data">
                    <span>{props.data}</span>
                </div>

            </div>

            <div className="pagamento-label">
                <span>{props.preco}</span>
            </div>
        </div>

    );

}

export default Pagamento;
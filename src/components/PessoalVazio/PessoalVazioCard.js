import React from "react";
import './PessoalVazioCard.scss'
import logo from "../../assets/logo-edited-grey.svg";

function PessoalVazioCard(props) {


    return(

        <div className="pessoal-vazio-Estatico-info">

            <div className="pessoal-vazio-Estatico-imagem">
                <img src={logo} alt="" className="imagem" />
                <div className="gradient"></div>
            </div>


            <div className="pessoal-vazio-Estatico-titulo">
                <span>{props.titulo}</span>
            </div>



        </div>

    );
}

export default PessoalVazioCard;
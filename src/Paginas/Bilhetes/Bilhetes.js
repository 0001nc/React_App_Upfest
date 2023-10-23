
// - - - - -
// BILHETES            PÁGINA ESTÁTICA
// - - - - -





import React from "react";
import Venda from "../../components/Venda/Venda";
import Saldo from "../../components/Saldo/Saldo";
import Mensagem from "../../components/Mensagem/Mensagem";
import TitulosGrandes from "../../components/TitulosGrandes/TitulosGrandes";
import Linha from "../../components/Linha/Linha";
import Menu from "../../components/Navegacao/Menu";
import image1 from "../../assets/images/sonar_24.jpg";
import image2 from "../../assets/images/tomorrowland.jpg";
import BilhetesApresentacao from "../../components/Bilhetes_Apresentacao/BilhetesApresentacao";

// USAR CONTEXTOß
import {useContext, useState} from 'react';
import {ContextoLogIn} from "../../App";
import ListFestivalEstatico from "../../components/ListFestival/ListFestivalEstatico";


function Bilhetes(){
    useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
    const userData = useContext(ContextoLogIn);

    return (
        <div className="Bilhetes">
            <Mensagem  mensagem={"Existem pagamentos pendentes na tua conta"}/>
            <BilhetesApresentacao titulo={"A decorrer"}  />
            <Venda/>
            <Saldo/>
            <Linha/>
            <TitulosGrandes titulosgrandes={"Em breve"} />
            <ListFestivalEstatico imagem={image1} titulo={"SONAR 2024"} data={"sábado 30 set."} morada={"Pavilhão Carlos Lopes"}/>
            <TitulosGrandes titulosgrandes={"Festivais passados"} />
            <ListFestivalEstatico imagem={image2} titulo={"SONAR 2023"} data={"14 Abril 2023"} morada={"Pavilhão Carlos Lopes"}/>
            <Menu/>
        </div>
    );
}

export default Bilhetes;
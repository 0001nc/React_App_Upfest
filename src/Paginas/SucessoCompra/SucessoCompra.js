
// ---------------------
// SUCESSO COMPRA               PÁGINA ESTÁTICA
// ---------------------



import React from "react";
import Linha from "../../components/Linha/Linha";
import Informacao from "../../components/Informacao/Informacao";
import Titulo from "../../components/Titulos/Titulo"
import Bilhetes from "../../components/Bilhete/Bilhetes";
import BilheteDisponivel from "../../components/Bilhete/BilheteDisponivel";
import Menu from "../../components/Navegacao/Menu";
import BannerSucessoCompra from "../../components/BannerSucessoCompra/BannerSucessoCompra";
import BannerCompra from "../../components/BannerCompra/BannerCompra";


import image1 from "../../assets/images/timmy.jpg";
import image2 from "../../assets/images/oliver.jpg";
import image3 from "../../assets/images/blasterjaxx.jpg"

// USAR CONTEXTO
import {useContext, useState} from 'react';
import {ContextoLogIn} from "../../App";
import image0 from "../../assets/images/somnii_23.jpg";
import ConcertosEstaticos from "../../components/Concerto/ConcertosEstaticos";

function SucessoCompra() {

    useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
    const userData = useContext(ContextoLogIn);


    return(

        <div className="Festival">
            <BannerSucessoCompra/>
            <BannerCompra image={image0} titulo={"RFM SOMNII 2024"}/>
            <Linha/>
            <Titulo titulo={"Concertos"}/>
            <ConcertosEstaticos imagem={image1} titulo={"TIMMY TRUMPET"} data={"Sábado, 21h00"} morada={"Palco Principal"}/>
            <ConcertosEstaticos imagem={image2} titulo={"OLIVIER HELDENS"} data={"Sábado, 23h30"} morada={"Palco Principal"}/>
            <ConcertosEstaticos imagem={image3} titulo={"BLASTERJAXX"} data={"Domingo, 18h00"} morada={"Palco Principal"}/>
            <Linha/>
            <Titulo titulo={"Informações"}/>
            <Informacao informacoes={"O RFM Somnii é o maior festival de praia em Portugal. Dedicado à música eletrónica, é palco habitual de\n" +
                "                alguns dos DJ's mais conhecidos do mundo da música. Por enquanto, Alok, encabeça o sunset que vai cobrir\n" +
                "                a Praia do Relógio na Figueira da Foz."}/>
            <Linha/>
            <Titulo titulo={"Bilhetes"}/>
            <Bilhetes titulo={"Early Bird"} data={"Indisponivel"} preco={"25,00€"}/>
            <BilheteDisponivel titulo={"Segunda Venda"} data={"Até 30 de Abril"} preco={"35,00€"}/>
            <BilheteDisponivel titulo={"Venda Final"} data={"Até 12 de junho"} preco={"45,00€"}/>
            <Menu/>
        </div>


    );
}

export default SucessoCompra;
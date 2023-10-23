
// - - - - -
// PESSOAL           PÁGINA ESTÁTICA
// - - - - -




import React from "react";
import Pagamento from "../../components/Pessoal/Pagamento";
import Mensagem from "../../components/Mensagem/Mensagem";
import Titulo from "../../components/Titulos/Titulo";
import Pendentes from "../../components/PagamentoPendente/Pendentes";
import Artista from "../../components/Artista/Artista";
import Seta from "../../components/Seta/Seta";
import Menu from "../../components/Navegacao/Menu";
import Entidade from "../../components/Entidade/Entidade";

import image1 from "../../assets/images/sonar_24.jpg";
import image2 from "../../assets/images/tomorrowland.jpg";
import image3 from "../../assets/images/amelie.jpg";

// USAR CONTEXTO
import {useContext, useState} from 'react';
import {ContextoLogIn} from "../../App";
import ListFestivalEstatico from "../../components/ListFestival/ListFestivalEstatico";


function Pagamentos(){

        useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
        const userData = useContext(ContextoLogIn);

    return(

        <div className="Pagamentos">

            <Mensagem  mensagem={"Existem pagamentos pendentes na tua conta"}/>
            <Titulo titulo={"Favoritos"} />

            <ListFestivalEstatico imagem={image1} titulo={"SONAR 2024"} data={"sábado 30 set."} morada={"Pavilhão Carlos Lopes"}/>
            <ListFestivalEstatico imagem={image2} titulo={"TOMORROWLAND"} data={"22 Junho 2024, 23h00"} morada={"Main Stage"}/>
            <Artista imagem={image3} titulo={"AMELIE LENS"} data={"Artista"}/>
            <Seta/>
            <Titulo titulo={"Pagamentos Pendentes"} />
            <Pendentes titulo={"Pagamento"} estado={"Pendente"} data={"10 setembro 2023"} preco={"20,00€"}/>
            <Entidade entidade={"21230"} referencia={"240 210 304"} valor={"20,00€"}/>
            <Titulo titulo={"Outro Pagamentos"} />
            <Pagamento titulo={"Bilhete"} estado={"Completo"} data={"15 agosto 2023"} preco={"35,00€"}/>
            <Pagamento titulo={"Carregamento"} estado={"Completo"} data={"23 Março 2023"} preco={"25,00€"}/>
            <Pagamento titulo={"Bilhete"} estado={"Completo"} data={"8 fevereiro 2023"} preco={"45,00€"}/>
            <Seta/>
            <Menu/>
        </div>

    );
}

export default Pagamentos;

// - - - - -
// PESSOAL VAZIO            PÁGINA ESTÁTICA
// - - - - -




import React from "react";
import TitulosGrandes from "../../components/TitulosGrandes/TitulosGrandes";
import Menu from "../../components/Navegacao/Menu";
import PessoalVazioCard from "../../components/PessoalVazio/PessoalVazioCard";


function PessoalVazio() {


    return(
        <div className={PessoalVazio}>
            <TitulosGrandes  titulosgrandes={"Favoritos"} />
            <PessoalVazioCard titulo={"Sem favoritos"}/>
            <TitulosGrandes  titulosgrandes={"Pagamentos"} />
            <PessoalVazioCard titulo={"Sem pagamentos"}/>
            <Menu/>
        </div>
    );
}

export default PessoalVazio;
import './Saldo.scss'
import {useContext} from "react";

import {ContextoLogIn} from "../../App";
import {ContextoCredito} from "../../App";
import {ContextoVendas} from "../../App";



function Saldo(props) {

    const saldo = useContext(ContextoCredito);

    return(
        <div className="saldo">
            <div className="saldo-icon1"></div>
            <span className="texto">Saldo Cashless</span>
            <span className="preco">{saldo} €</span>
        </div>


    );
}

export default Saldo;
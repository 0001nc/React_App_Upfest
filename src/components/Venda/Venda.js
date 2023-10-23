import './Venda.scss'

import {ContextoVendas} from "../../App";
import {useContext} from "react";

function Venda(props) {

    const vendas = useContext(ContextoVendas);
    return(

        <div className="venda">
            <div className="venda-icon1"></div>

            <span>{vendas} x Venda Final</span>
            <div className="venda-icon2"></div>
        </div>

    );
}

export default Venda;
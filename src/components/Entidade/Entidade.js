import './Entidade.scss'

function Entidade(props) {
    return(
        <div className="entidade">

            <div className="entidade-left"></div>

            <div className="entidade1-info">
                <div className="info-entidade">
                    <div className="entidade1-titulo">
                        <span>Entidade</span>
                    </div>
                    <div className="entidade1-status">
                        <span>Referência</span>
                    </div>
                    <div className="entidade1-data">
                        <span>Valor</span>
                    </div>
                </div>

                <div className="info-num">
                    <div className="num-titulo">
                        <span>{props.entidade}</span>
                    </div>
                    <div className="num-status">
                        <span>{props.referencia}</span>
                    </div>
                    <div className="num-data">
                        <span>{props.valor}</span>
                    </div>
                </div>
            </div>

        </div>






    );
}

export default Entidade;
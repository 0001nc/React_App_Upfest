import './BilheteDisponivel.scss'

function BilheteDisponivel(props) {
    const dataEvento = new Date(props.data);
    const mes = dataEvento.toLocaleString("pt-PT", { month: 'long'});
    const dia = dataEvento.getDate();
    const dataConvertida = "Até " + dia + " de " + mes;

    return(

        <div className={`bilhete1-info ${props.disponivel ? '' : 'indisponivel'}`}>


            <div className="bilhete1-imagem">
                <div className="gradient"></div>
            </div>

            <div className="bilhete-box"></div>
            <div className="bilhete-icon-bilhetes"></div>

            <div className="info">
                <div className="bilhete1-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="bilhete1-datas">
                    <span>{dataConvertida}</span>
                </div>

            </div>

            <div className="bilhete1-label">
                <span>{props.preco} €</span>
            </div>
        </div>


    );

}


export default BilheteDisponivel;
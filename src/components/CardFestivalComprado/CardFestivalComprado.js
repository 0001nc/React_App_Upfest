import './CardFestivalComprado.scss'

function CardFestivalComprado(props) {

    return(
        <div>

            <div className="apresentacao">

                <div className="apresentacao-texto">
                    <span>{props.titulo}</span>
                </div>

                <div className="imageTexto">
                    
                    <div className="apresentacao-imagem">
                        <div className="gradient2"></div>
                        <div className="dashed-line1"></div>
                    </div>

                    <div className="apresentacao-label">
                        <span>a acontecer</span>
                    </div>

                    <div className="apresentacao-info">

                        <div className="apresentacao-titulo">
                            <span>BRUNCH ELECTRONIK</span>
                        </div>

                        <div className="apresentacao-data">
                            <span>domingo 17 set.</span>
                        </div>

                        <div className="apresentacao-morada">
                            <span>Tapada da Ajuda</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default CardFestivalComprado;
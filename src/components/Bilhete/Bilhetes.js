import './Bilhetes.scss'

function Bilhetes(props) {
    return(

        <div class="bilhete-info">


            <div class="bilhete-imagem">
                <div class="gradient"></div>
            </div>

            <div class="bilhete-box"></div>
            <div class="bilhete-icon-bilhetes"></div>

            <div class="info">
                <div class="bilhete-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div class="bilhete-datas">
                    <span>{props.data}</span>
                </div>

            </div>

            <div class="bilhete-label">
                <span>{props.preco}</span>
            </div>
        </div>



    );

}

export default Bilhetes;
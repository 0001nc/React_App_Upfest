import './Mensagem.scss'

function Mensagem(props) {
    return(

        <div className="mensagem">
            <div className="mensagem-imagem-pagamentos-imagem">
                <div className="gradient"></div>
            </div>
            <span className="mensagem-titulo">{props.mensagem}</span>
        </div>



    );

}

export default Mensagem;
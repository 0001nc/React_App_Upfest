import './Pesquisa_Apresentacao.scss'

function Pesquisa_Apresentacao(props) {

    const image = {
        background: `url("https://upfest.site/public/${props.image}")`,

        filter: 'brightness(0.9)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const dataEvento = new Date(props.data);
    const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const indiceDia = dataEvento.getUTCDay();
    const diaSemana = diasDaSemana[indiceDia];
    const mes = dataEvento.toLocaleString("pt-PT", { month: 'short'});
    const dia = dataEvento.getDate();
    const dataConvertida = diaSemana + " " + dia + " " + mes;


    return(

        <div className="container">
            <div className="apresentacao-pesquisa">

                <div className="apresentacao-pesquisa-imagem" style={image}>

                </div>

                <div className="coracao1-pesquisa">
                    <div className="coracao1-pesquisa-box"></div>
                    <a href="#" className="apresentacao-pesquisa-coracao" alt=""></a>
                </div>

            </div>

            <div className="apresentacao-pesquisa-info">

                <div className="apresentacao-pesquisa-titulo">
                    <span>{props.nome}</span>
                </div>

                <div className="apresentacao-pesquisa-data">
                    <span>{dataConvertida}</span>
                </div>

                <div className="apresentacao-pesquisa-morada">
                    <span>{props.local}</span>
                </div>
            </div>

        </div>

    );

}

export default Pesquisa_Apresentacao;
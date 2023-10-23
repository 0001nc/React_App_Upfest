import './CardFestival.scss'

function Sugestao({imagem, preco, nome, data, local}) {
    const bgIMg = {
        background: `url("https://upfest.site/public/${imagem}")`,
        filter: 'brightness(0.9)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '378px',
        height: '20.53rem'
    }

    const dataEvento = new Date(data);
    const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const indiceDia = dataEvento.getUTCDay();
    const diaSemana = diasDaSemana[indiceDia];
    const mes = dataEvento.toLocaleString("pt-PT", { month: 'short'});
    const dia = dataEvento.getDate();
    const dataConvertida = diaSemana + " " + dia + " " + mes;

    return(
        <div className="sugestao">

            <div className="imageTexto">

                <div className="sugestao-imagem" style={bgIMg}>
                    <div className="gradient"></div>
                    <div className="gradient2"></div>
                </div>

                <div className="sugestao-label">
                    {preco ? <span>{preco} €</span> : <span>Indisponível</span>}
                </div>

                <div className="coracao">
                    <div className="coracao-box"></div>
                    <a href="#" className="sugestao-coracao" alt=""></a>
                </div>


                <div className="sugestao-info">

                    <div className="sugestao-titulo">
                        <span>{nome}</span>
                    </div>

                    <div className="sugestao-data">
                        <span>{dataConvertida}</span>
                    </div>

                    <div className="sugestao-morada">
                        <span>{local}</span>
                    </div>
                </div>


            </div>
        </div>



    );

}

export default Sugestao;
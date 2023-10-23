import './BannerCompra.scss'

function BannerCompra(props) {

    const image = {
        background: `url(${props.image})`,
        filter: 'brightness(0.9)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }


    return(

        <div className="container">
            <div className="banner-pesquisa">

                <div src={props.imagem} className="banner2-pesquisa-imagem" style={image}></div>

                <div className="coracao1-pesquisa">
                    <div className="coracao1-pesquisa-box"></div>
                    <a href="#" className="banner-pesquisa-coracao" alt=""></a>
                </div>

            </div>

            <div className="banner-pesquisa-info">

                <div className="banner-pesquisa-titulo">
                    <span>{props.titulo}</span>
                </div>

                <div className="banner-pesquisa-data">
                    <span>sexta 12 jul.</span>
                </div>

                <div className="banner-pesquisa-morada">
                    <span>Praia do Relógio, Figueira daFoz</span>
                </div>
            </div>

        </div>

    );

}

export default BannerCompra;
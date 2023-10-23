import './BannerArtista.scss';
import React from "react";

function BannerArtista(props) {
    const bgIMg = {
        backgroundImage: `url("https://upfest.site/public/${props.imagem}")`, // Use backgroundImage instead of background
        width: '380px',
        height: '6.5rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(5px)',
        WebkitFilter: 'blur(3px)', // Use WebkitFilter for Safari
    };

    return(
        <div >
            <div className="banner-artista-info">
                <div className="banner-artista-background" style={bgIMg}></div>

                <div className="banner-artista-imagem">
                    <div className="gradient2"></div>
                    <img src={`https://upfest.site/public/${props.imagem}`} alt="" className="imagem"/>
                    <div className="gradient"></div>
                </div>

                <div className="info">
                    <div className="banner-artista-titulo-banner">
                        <span>{props.titulo}</span>
                    </div>

                    <div className="banner-artista-data-banner">
                        <span>{props.data}</span>
                    </div>

                </div>

                <div className="coracao2-box"></div>
                <a href="#" className="concerto1-coracao" alt=""></a>
            </div>

        </div>


    );


}

export default BannerArtista;
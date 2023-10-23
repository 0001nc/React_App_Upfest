import './Titulo.scss'

function Titulo(props) {

    return(
        <div className="titulo">
            <span>{props.titulo}</span>
        </div>

    );

}

export default Titulo;
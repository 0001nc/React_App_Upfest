import './ValidarDados.scss';
import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";

// USAR CONTEXTO
import {useContext} from "react";
import {ContextoLogIn} from "../../App";



function ValidarDados(props) {

    useContext(ContextoLogIn);                  // DEVOLVE O OBJETO COM OS USER DATA
    const {userData, setUserData }= useContext(ContextoLogIn);

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [erros, setErros] = useState({});

    const redirect = useHistory();

    const [show, setShow] = useState(false);

    {/* VALIDAÇÃO DE ERROS */}
    function validarDados() {
        const erros = {};

        if (!nome){
            erros.nome = "Por favor escreve o teu nome";
        }else{
            erros.nome = '';
        }

        if (!email){
            erros.email = "Por favor escreve o teu email";
        }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            erros.email = "Email invalido";
            setShow(true);
        }else{
            erros.email = '';
        }
        return erros;
    }


    {/* VERIFICAÇÃO DE DADOS */}
    function handleSubmit(e) {
        e.preventDefault();
        const erros = validarDados();
        setErros(erros);

        if (!erros.nome && !erros.email ){
            setUserData({email, nome})
            redirect.push("/home");
        }
    }


    return(
        <div className="containerValidar">

            <div className="imagem-logo"></div>
            <form className="formulario" onSubmit={handleSubmit}>

                <label>Nome</label>
                <div className={`log-in-nome ${erros.email ? 'erro-login' : ''}`}>
                    <div className="log-in-nome-imagem">
                        <div className="gradient"></div>
                    </div>
                    <div className="nome-box"></div>
                    <input text="text" id="nome" name="nome" className="log-in-nome-inputTexto" placeholder="Introduz o teu nome"  onChange={(e) => setNome(e.target.value)}/>

                </div>

                <label>Email</label>
                <div className={`log-in-email ${erros.email ? 'erro-login' : ''}`}>
                    <div className="log-in-email-imagem">
                        <div className="gradient"></div>
                    </div>

                    <input type="text" id="email" name="email" className="log-in-email-inputTexto" placeholder="Introduz o teu e-mail "  onChange={(e) => setEmail(e.target.value)}/>

                </div>

                <button className="botao" type="submit" ></button>

                {
                    show ? <span className="erro-mensagem">Verifica o preenchimento dos campos</span>
                        : null
                }


            </form>



        </div>
    );

}

export default ValidarDados;
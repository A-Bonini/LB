import React, { useState } from "react";
import "../../styles/contato.css";
import ContatoService from "../../services/contato"; 

const Contato = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [statusContato, setStatusContato] = useState(false);

    const handleSubmitContato = async (e) => {
        e.preventDefault();

        await ContatoService.post(name,email,mensagem).then(() => {
            setStatusContato(true);

            setTimeout(() => {
                setStatusContato(false);
                setName("");
                setEmail("");
                setMensagem("");
            }, 5000);
        })
    }

    return(
        <div className="contato">
            <div className="container">
                <div className="contato-left animate_left">
                    <div className="contato-img">
                        <img src="./logo.png"/>
                    </div>
                </div>
                <div className="contato-right animate_right">
                    <div className="contato-form">
                        <form onSubmit={handleSubmitContato}>
                            <h2>Contato</h2>
                            <div className="wraper-contato">
                                <input type="text" placeholder="Nome..." maxLength="20" value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="wraper-contato">
                                <input type="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="wraper-contato">
                                <textarea placeholder="Mensagem..." maxLength="250" value={mensagem} onChange={e => setMensagem(e.target.value)}></textarea>
                            </div>
                            { statusContato ? <div className="status-success">Mensagem Enviada com sucesso!</div> : ""}
                            <div className="wraper-contato">
                                <input type="submit" value="Enviar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato;



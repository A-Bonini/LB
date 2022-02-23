import React, { Fragment, useEffect, useState} from "react";
import ContatoService from "../../../services/contato";
import "../../../styles/admin-contato.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

const Component_Contato = () => {
    const [dataContato, setDataContato] = useState([]);

    useEffect(() => {
        getDataContato();
    }, []);

    const getDataContato = async () => {
        await ContatoService.get().then((response) => {
            setDataContato(response.data.reverse());
        });
    }

    const handleClick = async (item, e) => {
        await navigator.clipboard.writeText(item);
        let OriginalValue = e.target.innerText;
        e.target.innerText = "Copiado";
            setTimeout(() => {
                e.target.innerText = OriginalValue;
            },1000);
    }

    const handleDelete = async (id) => {
        await ContatoService.delete(id).then(() => {
            getDataContato();
        });
    }

    return(
        <Fragment>
            <div className="wraper-contato-all">
                {dataContato.map((item,key) => 
                    <div className="painel" key={key}>
                        <div className="usuario">
                            <h5 className="name" onClick={(e) => handleClick(item.name, e)}>{item.name}</h5>
                            <h5 className="email" onClick={(e) => handleClick(item.email, e)}>{item.email}</h5>
                        </div>
                        <div className="content-mensagem">
                            <p className="mensagem">{item.mensagem}</p>
                            <FontAwesomeIcon icon={ faWindowClose } onClick={() => handleDelete(item._id)}/>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Component_Contato;
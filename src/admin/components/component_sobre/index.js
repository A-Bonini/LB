import React, { useState, useEffect } from "react";
import SobreService from "../../../services/sobre";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Component_Sobre = () => {
    const [textSobre, setTextSobre] = useState([]);
    const [idSobre, setId] = useState("");
    const [sobreStatus, setSobreStatus] = useState(false);
    const [image, setImage] = useState();
    const [savedImage, setSavedImage] = useState("");
    const [routeImage, setRouteImage] = useState("");

    useEffect(async () => {
        await getDataSobre();
    }, []);

    const handleChange = async (item,index) => {
        let newArray = [...textSobre];
        newArray.splice(index,1, item);
        setTextSobre(newArray);
    }

    const getDataSobre = async () => {
        const response = await SobreService.get();
        console.log(response);
        setTextSobre(JSON.parse(response.data.sobre[0].text));
        setId(response.data.sobre[0]._id);
        setSavedImage(response.data.sobre[0].image);
        setRouteImage(response.data.link_image);
    }

    const handleClickSobre = async (e) => {
        e.preventDefault();

        await SobreService.post("","[\""+ "" + "\"," + "\"" + "" + "\"," + "\"" + "" + "\"]").then(() => {
            getDataSobre();
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('id', idSobre);      
        formData.append('text', "[\"" + textSobre[0] + "\"," + "\"" + textSobre[1] + "\"," + "\"" + textSobre[2] + "\"]");

        await SobreService.update(formData).then(() => {
            getDataSobre();
            setSobreStatus(true);

            setTimeout(() => {
                setSobreStatus(false);
            }, 5000);
        }).catch(() => {

        });
    }

    if(textSobre.length < 1){
        return(
        <div className="painel">
            <h2>Editar texto da Sobre:</h2>
            <button className="plus" onClick={handleClickSobre}><FontAwesomeIcon icon={ faPlus }/></button>
        </div>
        
        )
    }

    return(
        <div className="painel">
            <div className="wraper-sobre-all">
                <h2>Editar texto da Sobre:</h2>
                <form onSubmit={handleSubmit}>
                    { textSobre.map((item, key) =>
                        <div key={key} className="wraper-input-sobre">
                            <input type="text" name="input_sobre" value={item} onChange={e => handleChange(e.target.value, key)}/>
                        </div>
                    )}
                    <div className="wraper-input-sobre">
                        { image ? <label style={{backgroundImage: "url(" + URL.createObjectURL(image) + ")"}} className="img-label" htmlFor="file-img-sobre"></label> : savedImage === "" || savedImage === undefined ? <label className="img-label" htmlFor="file-img-sobre"><FontAwesomeIcon icon={ faPlus } /></label> : <label className="img-label" htmlFor="file-img-sobre" style={{backgroundImage: `url( ${routeImage}${savedImage})`}}></label> }
                        <input type="file" id="file-img-sobre" onChange={e => setImage(e.target.files[0]) }/>
                    </div>
                    { sobreStatus ? <div className="status-success">Texto atualizado com sucesso!</div> : ""}
                    <input type="submit" value="Salvar" name="acao"/>
                </form>
            </div>
        </div>
    )
}

export default Component_Sobre;
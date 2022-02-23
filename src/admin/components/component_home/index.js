import React, { useState, useEffect } from "react";
import HomeService from "../../../services/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Component_Home = () => {
    const [inputHome, setInputHome] = useState(false);
    const [idHome, setIdHome] = useState("");
    const [homeStatus, setHomeStatus] = useState(false);
    const [image, setImage] = useState();
    const [savedImage, setSavedImage] = useState("");
    const [routeImage, setRouteImage] = useState("");


    useEffect(() => {
        getDataHome();
    }, []);

    const getDataHome = async () => {
        const response = await HomeService.get();
        console.log(response);
        setInputHome(response.data.home[0].text);
        setIdHome(response.data.home[0]._id);
        setSavedImage(response.data.home[0].image);
        setRouteImage(response.data.link_image);
    }

    const handleClickHome = async (e) => {
        e.preventDefault();

        await HomeService.post("","[\""+ "" + "\"," + "\"" + "" + "\"," + "\"" + "" + "\"]").then(() => {
            getDataHome();
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('text', inputHome);
        formData.append('id', idHome);

        await HomeService.update(formData).then(() => {
            getDataHome();
            setHomeStatus(true);

            setTimeout(() => {
                setHomeStatus(false);
            }, 5000);
        }).catch(() => {

        });
        
    }

    if(inputHome === false){
        return(
        <div className="painel">
            <h2>Editar texto da home:</h2>
            <button className="plus" onClick={handleClickHome}><FontAwesomeIcon icon={ faPlus }/></button>
        </div>
        
        )
    }

    return(
        <div className="painel-all">
            <div className="painel">
                <div className="wraper-home-all">
                    <h2>Editar texto da home:</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="wraper-input-home">
                            <input type="text" name="input_home" value={inputHome} onChange={e => setInputHome(e.target.value)}/>
                        </div>
                        <div className="wraper-input-home">
                            { image ? <label style={{backgroundImage: "url(" + URL.createObjectURL(image) + ")"}} className="img-label" htmlFor="file-img"></label> : savedImage === "" ? <label className="img-label" htmlFor="file-img"><FontAwesomeIcon icon={ faPlus } /></label> : <label className="img-label" htmlFor="file-img" style={{backgroundImage: `url( ${routeImage}${savedImage})`}}></label> }
                            <input type="file" id="file-img" onChange={e => setImage(e.target.files[0]) }/>
                        </div>
                        <div className="wraper-input-home">
                            { homeStatus ? <div className="status-success">Texto atualizado com sucesso!</div> : ""}
                            <input type="submit" value="Salvar" name="acao"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Component_Home;
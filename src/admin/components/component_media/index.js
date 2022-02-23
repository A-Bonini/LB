import React,{ useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MediaService from "../../../services/socialMedia"

const Component_Media = () => {
    const [urlInstagram, setUrlInstagram] = useState("");
    const [urlFacebook, setUrlFacebook] = useState("");
    const [urlWhatsapp, setUrlWhatsapp] = useState("");
    const [id, setId] = useState("");
    const [statusMedia, setMediaStatus] = useState(false);
    const [media, setMedia] = useState("");

    useEffect(() => {
        getDataMedia();
    }, []);

    const getDataMedia = async () => {
        const response = await MediaService.get();
        console.log(response);
        setMedia(response.data);
        setUrlInstagram(response.data[0].instagram);
        setUrlFacebook(response.data[0].facebook);
        setUrlWhatsapp(response.data[0].whatsapp);
        setId(response.data[0]._id);
    }

    const handleSubmitMedia = async (e) => {
        e.preventDefault();

        await MediaService.update(id,urlInstagram,urlFacebook,urlWhatsapp).then(() => {
            getDataMedia();
            setMediaStatus(true);

            setTimeout(() => {
                setMediaStatus(false);
            }, 5000);
        }); 
    }

    const handleClickMedia = async (e) => {
        e.preventDefault();

        await MediaService.post("","","").then(() => {
            getDataMedia();
        });
    }

    if(media.length < 1){
        return(
        <div className="painel">
            <h2>Editar Social Media:</h2>
            <button className="plus" onClick={handleClickMedia}><FontAwesomeIcon icon={ faPlus }/></button>
        </div>
        
        )
    }

    return(
        <div className="painel">
            <div className="wraper-media-all">
                <h2>Editar Social Media:</h2>
                <form onSubmit={handleSubmitMedia}>
                    <div className="wraper-input-media">
                        <div className="box-svg">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </div>
                        <input type="text" value={urlInstagram} onChange={e => setUrlInstagram(e.target.value)}/>
                    </div>
                    <div className="wraper-input-media">
                        <div className="box-svg"> 
                            <FontAwesomeIcon icon={ faFacebookF } />
                        </div>
                        <input type="text" value={urlFacebook} onChange={e => setUrlFacebook(e.target.value)}/>
                    </div>
                    <div className="wraper-input-media">
                        <div className="box-svg"> 
                            <FontAwesomeIcon icon={ faWhatsapp } />
                        </div>
                        <input type="text" value={urlWhatsapp} onChange={e => setUrlWhatsapp(e.target.value)}/>
                    </div>
                    { statusMedia ? <div className="status-success">Social Media atualizada com sucesso!</div> : ""}
                    <div className="wraper-input-media">
                        <input type="submit" value="Salvar"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Component_Media;
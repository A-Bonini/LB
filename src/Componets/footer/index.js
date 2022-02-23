import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SocialMediaService from "../../services/socialMedia";

function Footer(){
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    useEffect(() => {
        getDataMedia();
    }, []);

    const getDataMedia = async () => {
        await SocialMediaService.get().then((response) => {
            setInstagram(response.data[0].instagram);
            setFacebook(response.data[0].facebook);
            setWhatsapp(response.data[0].whatsapp);
        });
    }

    return(
        <footer>
            <div className="container">
                <div className="footer-left">
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>N</span>
                    <span>I</span>
                    <span>N</span>
                    <span>I</span>
                </div>
                <div className="footer-right">
                     <div className="icons">
                        <a target="_blank" href={instagram}><FontAwesomeIcon icon={ faInstagram } /></a>
                        <a target="_blank" href={facebook}><FontAwesomeIcon icon={ faFacebookF } /></a>
                        <a target="_blank" href={whatsapp}><FontAwesomeIcon icon={ faWhatsapp } /></a>
                    </div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;
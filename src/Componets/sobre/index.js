import React, { useState, useEffect } from "react";
import SobreService from "../../services/sobre";
import Loading from "../loading";

function Sobre(){
    const [textSobre, setTextSobre] = useState(false);
    const [image, setImage] = useState("");
    const [routeImg, setRouteImg] = useState("");

    useEffect(() => {
        getDataSobre();
    }, [])

    const getDataSobre = async () => {
        const response = await SobreService.get();
        console.log(response);
        setTextSobre(JSON.parse(response.data.sobre[0].text));
        setImage(response.data.sobre[0].image);
        setRouteImg(response.data.link_image);
    }

    if(!textSobre){
        return <Loading/>
    }

    return(
        <div className="sobre">
            <div className="container">
                <div className="img-pessoa-sobre animate_left">
                    <img src={image !== "" ? routeImg + image : ""}/>
                </div>
                <div className="container-lista">
                    <div className="lista-sobre animate_right">
                        <ul>
                            <h2>Sobre</h2>
                            {textSobre.map((item, key) => 
                                <li key={key}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
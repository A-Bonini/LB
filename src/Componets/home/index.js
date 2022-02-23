import React, { useState, useEffect } from "react";
import HomeService from "../../services/home";
import Loading from "../loading";

function Home(){
    const [textHome, setTextHome] = useState(false);
    const [image, setImage] = useState("");
    const [routeImg, setRouteImg] = useState("");

    useEffect(() => {
        getDataHome();
    }, [])

    const getDataHome = async () => {
        const response = await HomeService.get();
        setTextHome(response.data.home[0].text);
        setImage(response.data.home[0].image);
        setRouteImg(response.data.link_image);
    }

    if(!textHome){
        return <Loading/>
    }

    return(
        <div className="home">
                <div className="container">
                    <div className="texto-home animate_left">
                            <h1><span>{ textHome }</span></h1>
                    </div>
                    <div className="img-pessoa animate_right">
                        <img src={image !== "" ? routeImg + image : ""}/>
                    </div>
                </div>
        </div>
    )
}

export default Home;
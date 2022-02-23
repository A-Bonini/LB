import React, { useState, useEffect } from "react";
import CursosService from "../../services/cursos";
import Loading from "../loading";
import "../../styles/cursos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Cursos(){
    const [cursos, setCursos] = useState([]);
    const [routeImage, setRouteImage] = useState();
    const [curIndex, setCurIndex] = useState(0);
    const [tamContent, setTamContent] = useState();
    const [size, setSize] = useState(851);

    useEffect(async() => {
        await getDataCursos();

        function updateSize(){
            setSize(window.innerWidth);
        }
        await window.addEventListener('resize', updateSize);
        updateSize();
    }, []);

    useEffect(async() => {
        setTamContent(true);
        Slider();
    }, [cursos]);

    const getDataCursos = async () => {
        let response = await CursosService.getCursos();
        setCursos(response.data.cursos);
        setRouteImage(response.data.link_image);
    }

    const Slider = async (param) => {
        if(param >= cursos.length){
            setCurIndex(0);
        } else if(param < 0){
            setCurIndex(cursos.length - 3);
        } else if(curIndex > param){
            setCurIndex(curIndex - 1);
        } else if(curIndex < param){
            setCurIndex(curIndex + 1);
        }
    }

    const handleClickLeft = () => {
        Slider((curIndex - 1));
    }

    const handleClickRight = () => {
        Slider((curIndex + 1));
    }

    if(!routeImage && tamContent !== 0){
        return <Loading/>
    }

    return(
        <div className="cursos">
            <div className="container">
                <div className="wraper-cursos-cli-all">
                    <div className="wraper-cursos-cli">
                        <div className="content-cursos" style={tamContent === true ? size < 950 ? size < 580 ? {width: `${cursos.length * 100}%`, marginLeft: `calc(${- 100 * curIndex}%)`,transition: "1s"} : {width: `${cursos.length * 50}%`, marginLeft: `calc(${- 50 * curIndex}%)`,transition: "1s"} : {width: `${cursos.length * 33.3}%`, marginLeft: `calc(${- 33.3 * curIndex}%)`,transition: "1s"} : {}}>
                            <div className="arrow-left" onClick={() => handleClickLeft()}><FontAwesomeIcon icon={ faChevronLeft } /></div>
                            <div className="arrow-right" onClick={() => handleClickRight()}><FontAwesomeIcon icon={ faChevronRight } /></div>
                            {cursos.map((item, key,ar) => 
                            <div key={key} className="wraper-curso-single">
                                <div className="curso-single">
                                    <div className="image-curso-single" style={{backgroundImage: `url( ${routeImage}${item.image})`}}></div>
                                    <div className="text-curso-single">
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                        <div className="content-button"><a target="_blank" rel="noreferrer" href={item.url}>Saiba mais!</a></div>
                                    </div>
                                </div> 
                            </div>            
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos;
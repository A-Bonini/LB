import React, { useState, useEffect } from "react";
import CursosService from "../../../services/cursos";
import { Link } from "react-router-dom";

const Component_Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const [routeImage, setRouteImage] = useState("");

    useEffect(() => {
        getDataCursos();
    }, [])

    const getDataCursos = async () => {
        let response = await CursosService.getCursos();
        setCursos(response.data.cursos);
        setRouteImage(response.data.link_image);
    }

    const deleteCurso = async (id) => {
        await CursosService.delete(id);
        getDataCursos();
    }

    return(
        <div className="painel cursos-admin">
            <div className="wraper-painel-cursos">
                <div className="wraper-topo-cursos">
                    <h2>Cursos:</h2>
                    <Link to="/admin/cursos/create"><button className="create">Create</button></Link>
                </div>
                <div className="wraper-cursos">
                {cursos.map((item, key) =>
                    <div key={key} className="curso-single-admin">
                        <div className="img-curso" style={{backgroundImage: `url( ${routeImage}${item.image})`}}></div>
                        <div className="text-curso">
                            <div className="title-curso">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="body-curso">
                                <p>{item.body}</p>
                            </div>
                        </div>
                        <div className="saiba-mais">
                            <a target="_blank" rel="noreferrer" href={item.url}>Saiba mais!</a>
                        </div>
                        <div className="buttons">
                            <button className="delete" onClick={() => deleteCurso(item._id)}>Delete</button>
                            <Link className="update-link" to={`/admin/cursos/${item._id}/edit`}><button className="update">Update</button></Link>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Component_Cursos;
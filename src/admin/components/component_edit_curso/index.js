import React, { useEffect, useState } from "react";
import CursosService from "../../../services/cursos";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateCurso = () => {
    const [image, setImage] = useState();
    const [status, setStatus] = useState({
        'type': '',
        'mensagem': ''
    });
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [url, setUrl] = useState("");
    const [routeImage, setRouteImage] = useState("");
    const [savedImage, setSavedImage] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getDataCursoId();
    }, []);

    const getDataCursoId = async () => {
        let curso = await CursosService.getCursoId(id);
        setSavedImage(curso.data.curso.image);
        setTitle(curso.data.curso.title);
        setBody(curso.data.curso.body);
        setUrl(curso.data.curso.url);
        setRouteImage(curso.data.link_image); 
    }

    const uploadImage = async (e) => {
        e.preventDefault();

        console.log('Upload Imagem');
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('body', body);
        formData.append('url', url);
        
        await CursosService.update(id,formData).then((response) => {
            setStatus({
                'type': 'success',
                'mensagem': response.data.mensagem
            })
            setRedirect(true);
        }).catch((err) => {
            if(err.response){
                setStatus({
                    'type': 'error',
                    'mensagem': err.response.data.mensagem
                })
            } else {
                setStatus({
                    'type': 'error',
                    'mensagem': "Erro: Tente novamente mais tarde!"
                })
            }
        })
        
    }

    let navigate = useNavigate();

    if(redirect)
        navigate("/admin/cursos")


    return(
        <div className="create_cursos">
            <div className="painel">
                <div className="create-single">
                    <form onSubmit={uploadImage}>
                        <div className="wraper-create">
                            { image ? <label style={{backgroundImage: "url(" + URL.createObjectURL(image) + ")"}} className="img-label" htmlFor="image"></label> : <label className="img-label" htmlFor="image" style={{backgroundImage: `url( ${routeImage}${savedImage})`}}></label>}
                            <input type="file" id="image" name="image" onChange={e => setImage(e.target.files[0]) }/>
                        </div>
                        <input type="text" placeholder="Title..." value={title} maxLength="50" onChange={e => setTitle(e.target.value)}/>
                        <input type="text" placeholder="Body..." value={body} maxLength="200" onChange={e => setBody(e.target.value)}/>
                        <input type="text" placeholder="Url..." value={url} onChange={e => setUrl(e.target.value)}/>
                        {status.type === "success" ? <div className="curso-success"><p>{status.mensagem}</p></div> : "" }
                        {status.type === "error" ? <div className="curso-error"><p>{status.mensagem}</p></div> : "" }

                        <div className="wraper-input-submit">
                            <input type="submit" value="Salvar" name="acao"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateCurso;
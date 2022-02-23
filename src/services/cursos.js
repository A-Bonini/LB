import Api from "./Api";

const CursosService = {
    uploadCursos: (body, headers) => Api.post("/cursos/upload", body, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    getCursos: () => Api.get("/cursos"),
    delete: (id) => Api.delete(`/cursos/${id}`, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    update: (id, body) => Api.put(`/cursos/${id}/edit`, body,{
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    getCursoId: (id) => Api.get(`/cursos/${id}`, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
}

export default CursosService;
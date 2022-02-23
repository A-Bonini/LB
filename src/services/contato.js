import Api from "./Api.js";

const ContatoService = {
    post: (name,email,mensagem) => Api.post("/contato", {name: name,email: email,mensagem: mensagem}),
    get: () => Api.get("/contato", {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    delete: (id) => Api.delete(`/contato/${id}`, {
        headers: {'x-access-token': localStorage.getItem('token')}
    })
}

export default ContatoService;
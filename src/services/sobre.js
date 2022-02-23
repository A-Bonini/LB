import Api from "./Api.js";

const SobreService = {
    get: () => Api.get("/sobre"),
    post: (image,...text) => Api.post("/sobre", {image: image,text: [...text]}, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    update: (body) => Api.put(`/sobre`, body, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
}

export default SobreService;
import Api from "./Api.js";

const HomeService = {
    get: () => Api.get("/home"),
    post: (image,text) => Api.post("/home", {image:image,text: text}, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    update: async (body) => Api.put(`/home`, body, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
}

export default HomeService;
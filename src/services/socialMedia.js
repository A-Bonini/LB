import Api from "./Api.js";

const MediaService = {
    get: () => Api.get("/social-media"),
    update: (id, instagram, facebook, whatsapp) => Api.put("/social-media", {'id': id, 'instagram': instagram, 'facebook': facebook, "whatsapp": whatsapp}, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    post: (instagram, facebook, whatsapp) => Api.post(`/social-media`, {'instagram': instagram, 'facebook': facebook, "whatsapp": whatsapp}, {
        headers: {'x-access-token': localStorage.getItem('token')}
    })
}

export default MediaService;
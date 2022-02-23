import Api from "./Api.js";

const UsersService = {
    login: async(params) => {
        const response = await Api.post('/users/login', params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        return response;
    },
    logout: () => {
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    },
    get: () => Api.get('/users', {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    delete: (id) => Api.delete(`users/${id}`, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    register: (nameUser,emailUser,passwordUser) => Api.post(`users/register`, {
        name: nameUser, email: emailUser, password: passwordUser
    }, {
        headers: {'x-access-token': localStorage.getItem('token')} 
    }),
    updateInfo: async (name,email) => {
        const response = await Api.put('users/edit/info', {name: name,email: email}, {
        headers: {'x-access-token': localStorage.getItem('token')}})

        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
    },
    updatePassword: async (password) => {
        const response = await Api.put('users/edit/pass', {password: password}, {
            headers: {'x-access-token': localStorage.getItem('token')}
        });

        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
    }
    
}

export default UsersService;
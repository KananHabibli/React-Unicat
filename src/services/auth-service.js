import axios from '../axios';

const register = (username, email, password) => {
    return axios.post('/signup', {
        username,
        email, 
        password
    });
};

const login = (email) => {
    console.log(`/signup?q=${email}`)
    axios.get(`/signup?q=${email}`)
    .then(response => {
        // if(response.data.accessToken){
            console.log(`Response data: ${response.data}`)
            localStorage.setItem("user", JSON.stringify(response.data));
        // }

        return response.data;
    })
    .catch(error => { console.log(error )});
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
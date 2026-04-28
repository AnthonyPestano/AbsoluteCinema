import axios from 'axios';

const api = axios.create({
    baseURL: 'https://developer.themoviedb.org/',
    timeout: 5000
});

export default api;

import axios from 'axios';

const API = axios.create({
    baseURL: 'www.modernbakery.shop/', // Update with your backend URL
});

export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);

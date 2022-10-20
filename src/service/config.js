import axios from 'axios';
import { API_ORIGIN } from 'config/constants';
import { readStateFromCookie } from 'config/workWithCookieLocalStorage';

axios.defaults.baseURL = API_ORIGIN;
axios.interceptors.request.use(async (config) => {
    const token = readStateFromCookie('token');
    if (!!token) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});

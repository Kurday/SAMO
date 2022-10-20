import axios from 'axios';
import { LOGIN_URL, REGISTRATION_URL } from 'config/constants';

export const loginPost = (data) => {
    return axios.post(LOGIN_URL, data);
};

export const registrationtPost = (data) => {
    return axios.post(REGISTRATION_URL, data);
};

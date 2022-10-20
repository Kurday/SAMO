import { QueryClient } from 'react-query';
import axios from 'axios';
import * as sections from './sections';

import './config';

export const getData = async (path, config) => {
    return await axios.get(path, config);
};

export const postData = async (data, path) => {
    return await axios.post(path, data);
};

export const deleteData = async (path) => {
    const res = await axios.delete(path);
    return await res.data;
};

export const patchData = async (path, data) => {
    return await axios.patch(path, data);
};

export const putData = async (path, data) => {
    return await axios.put(path, data);
};

export const API = {
    ...sections,
};

const retry = (failureCount, error) => {
    if (axios.isAxiosError(error) && error.response?.status === 403) {
        return false;
    }

    return failureCount < 3;
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: process.env.NODE_ENV === 'production',
            retry,
        },
        mutations: {
            retry,
        },
    },
});

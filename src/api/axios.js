import axiosClient from './axiosClient';

const axios = {
    getImage: () => {
        const url = '/';
        return axiosClient.get(url);
    },
};

export default axios;

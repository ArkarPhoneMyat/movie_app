import {getApi} from './api_method'

const getMovies = (setData) => {
    getApi('movies', data => {
        setData(data);
    })
};

export const homeController = {getMovies}
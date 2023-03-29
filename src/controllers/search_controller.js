import { getApi } from "./api_method";

const getMoviesSearch = (text, setData) => {
    getApi(`movies?q=${text}`, data => {
        setData(data);
    })
};

export const searchController = {getMoviesSearch}
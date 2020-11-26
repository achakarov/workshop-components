import { request } from './requestServices.js';

const databaseUrl = 'https://my-movies-9d139.firebaseio.com/';
const api = {
    movies: `${databaseUrl}/movies.json`
}

export const getAllMovies = async (searchText) => {
    let res = await request(api.movies, 'GET');
    return Object.keys(res).map(key => ({ key, ...res[key] })).filter(x => !searchText || searchText == x.title);
}

export const getOneMovie = async (id) => {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');
    return res;
}

export const likeMovie = async (id, creator) => {
    let res = await request(`${databaseUrl}/movies/${id}/likes.json`, 'POST', { creator });
    return res;
}

export const addMovie = async (movieData) => {
    let res = await request(api.movies, 'POST', movieData);
    return res;
}
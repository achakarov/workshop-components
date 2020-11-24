const apiKey = 'AIzaSyDL_F8muAk8EZ49AibmWq1coMGxwZyBwJc';
const databaseUrl = 'https://my-movies-9d139.firebaseio.com/';
const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

import { request } from './requestServices.js';

export const register = async (email, password) => {
    let res = await request(registerUrl, 'POST', {
        email,
        password,
    });

    localStorage.setItem('auth', JSON.stringify(res));

    return res;
}
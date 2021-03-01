import axios from "axios";
import { API } from "../helpers/constants";

export const getToken = async (email, password) => {
    // try {
    //     const { data } = await axios.post(`${API}/api/token/`, {
    //         email,
    //         password
    //     })
    //     console.log(data);
    // } catch (error) {
    //     console.warn(error)
    // }
}

export const setTokens = (tokens) => {
    localStorage.setItem('access', JSON.stringify(tokens.access));
    localStorage.setItem('refresh', JSON.stringify(tokens.refresh));
}

export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem('access'));
}

export const getRefreshToken = () => {
    return JSON.parse(localStorage.getItem('refresh'));
}

export const logOut = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
}

export const isAuthenticated = () => {
    return !!getAccessToken();
}

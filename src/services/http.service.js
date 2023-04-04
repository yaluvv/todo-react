import axios from "axios";
import configFile from '../config.json'
import localStorageService from "./localStorage.service";

const http = axios.create({
    baseURL: configFile.baseUrl,
})

http.interceptors.request.use(async (config) => {
    const containSlash = /\/$/gi.test(config.url)
    config.url = (containSlash ? config.url.slice(0, -1) : config.url) + '.json'

    const expiresDate = localStorageService.getTokenExpiresDate();
    const refreshToken = localStorageService.getRefreshToken();
    const isExpired = refreshToken && expiresDate < Date.now();

    if (isExpired) {
        const data = await authService.refresh();

        localStorageService.setTokens({
            refreshToken: data.refresh_token,
            idToken: data.id_token,
            expiresIn: data.expires_in,
            localId: data.user_id,
        });
    }

    return config
}, (error) => {
    return Promise.reject(error)
})

export const transformData = (data) => {
    return data && !data._id ? Object.keys(data).map((key) => ({
        ...data[key],
    }))
        : data
}


const httpService = {
    get: http.get,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
}

export default httpService;
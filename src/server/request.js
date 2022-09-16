import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http://localhost:8080',
        baseURL: 'http://175.178.6.229:7878',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err);
    })

    return instance(config)
}
import axios from "axios";

const API_KEY='e6c8e2e06ee03d15ed893112e5b97630';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;


export const callServer = (url, method = 'get', data = undefined,headers=undefined) => {
    return axios({
        url: apiUrl+url+`,us&units=metric`,
        method: method,
        headers:headers,
        data: data,
    })
};
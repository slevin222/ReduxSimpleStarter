import axios from 'axios';

const API_KEY = 'f5269c697db6a3dd501025fdaab0f3b0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//npm install --save axios  // for api call like ajax 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);



    return {
        type: FETCH_WEATHER,
        payload: request

    };
}
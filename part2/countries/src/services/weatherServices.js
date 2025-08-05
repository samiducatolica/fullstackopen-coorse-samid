import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q';
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const getWeatherCity = (city) => {

    const url = `${baseUrl}=${city}&appid=${import.meta.env.VITE_OPEN_WEATER_API_KEY}`;
    const request = axios.get(url);
    return request.then(response => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Error fetching weather data');
        }
    }).catch(error => {
        console.error('Error fetching weather data:', error);
        throw error;
    });
}
export default {getWeatherCity};
import axios from 'axios';

const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";

export const getWeatherData = (city) => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
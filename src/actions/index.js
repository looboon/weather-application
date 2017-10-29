import axios from 'axios';

const API_KEY = 'e6cc8303af3b0e9a73b021e49f175b3e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log(city);
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response
  };
}

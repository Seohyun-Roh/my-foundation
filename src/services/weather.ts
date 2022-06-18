import axios from 'axios'
import { IWeatherAPIRes } from 'types/weather.d'

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5'

interface Params {
  lat: number
  lon: number
}

// 37.494958, 126.844128
export const getWeatherForecast5DaysApi = (params: Params) =>
  axios.get<IWeatherAPIRes>(`${WEATHER_BASE_URL}/forecast`, {
    params: {
      ...params,
      appid: process.env.REACT_APP_WEATHER_APP_ID,
      units: 'metric',
    },
  })

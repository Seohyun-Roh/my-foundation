import axios from 'axios'

import { IWeatherAPIRes } from 'types/weather.d'
import { WEATHER_BASE_URL } from 'constants/weather'

interface Params {
  lat: number
  lon: number
}

export const getWeatherForecast5DaysApi = (params: Params) =>
  axios.get<IWeatherAPIRes>(`${WEATHER_BASE_URL}/forecast`, {
    params: {
      ...params,
      appid: process.env.REACT_APP_WEATHER_APP_ID,
      units: 'metric',
    },
  })

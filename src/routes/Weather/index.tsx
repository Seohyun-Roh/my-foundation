import { useState } from 'react'
import { useMount } from 'react-use'

import { getWeatherForecast5DaysApi } from 'services/weather'
import { IWeatherAPIRes } from 'types/weather'
import Item from './Item'

import styles from './weather.module.scss'

const Weather = () => {
  const [forecasts, setForecasts] = useState<IWeatherAPIRes>()

  useMount(() => {
    const params = { lat: 33.3333, lon: 33.44444 }

    getWeatherForecast5DaysApi(params).then((res) => {
      setForecasts(res.data)
    })
  })

  return (
    <section className={styles.forecast}>
      <h1>{forecasts?.city.name}</h1>
      <ul>
        {forecasts?.list.map((forecast) => (
          <Item key={forecast.dt} forecast={forecast} />
        ))}
      </ul>
    </section>
  )
}

export default Weather

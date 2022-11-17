import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { getWeatherForecast5DaysApi } from 'services/weather'
import { languageState } from 'states/language'
import { IWeatherAPIRes } from 'types/weather'

import Item from './Item'
import styles from './weather.module.scss'

const Weather = () => {
  const language = useRecoilValue(languageState)

  const [forecasts, setForecasts] = useState<IWeatherAPIRes>()

  useEffect(() => {
    const lang = language === 'ko' ? 'kr' : 'en'
    const params = { lat: 33.3333, lon: 33.44444, lang }

    getWeatherForecast5DaysApi(params).then((res) => {
      setForecasts(res.data)
    })
  }, [language])

  return (
    <section className={styles.forecast}>
      <h1>{forecasts?.city.name}</h1>
      <ul className={styles.forecastList}>
        {forecasts?.list.map((forecast) => (
          <Item key={forecast.dt} forecast={forecast} />
        ))}
      </ul>
    </section>
  )
}

export default Weather

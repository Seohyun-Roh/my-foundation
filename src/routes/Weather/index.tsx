import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { useGeoLocation } from 'hooks'
import { getWeatherForecast5DaysApi } from 'services/weather'
import { languageState } from 'states/language'
import { IWeatherAPIRes } from 'types/weather'

import Item from './Item'
import styles from './weather.module.scss'

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
}

const Weather = () => {
  const language = useRecoilValue(languageState)
  const { location } = useGeoLocation(geolocationOptions)
  const [forecasts, setForecasts] = useState<IWeatherAPIRes>()

  useEffect(() => {
    const lang = language === 'ko' ? 'kr' : 'en'
    let lat = 37.5326
    let lon = 127.024612

    const savedLocation = localStorage.getItem('currentLocation')

    if (savedLocation) {
      ;({ lat, lon } = JSON.parse(savedLocation))
    } else {
      if (location) {
        ;({ latitude: lat, longitude: lon } = location)
      }

      localStorage.setItem('currentLocation', JSON.stringify({ lat, lon }))
    }

    const params = { lat, lon, lang }

    getWeatherForecast5DaysApi(params).then((res) => {
      setForecasts(res.data)
    })
  }, [language, location])

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

import { useI18n } from 'hooks'
import { IListItem } from 'types/weather'

import styles from './weather.module.scss'

interface Props {
  forecast: IListItem
}

const Item = ({ forecast }: Props) => {
  const t = useI18n()

  return (
    <li className={styles.forecastItem}>
      <dl>
        <div>
          <dt>날짜</dt>
          <dd>
            <time dateTime={`${forecast.dt}`}>
              {forecast.dt_txt.substring(0, 13)}
              {`${t(`front:weather.hour`)}`}
            </time>
          </dd>
        </div>
        <div>
          <dt>온도</dt>
          <dd>
            {Math.floor(forecast.main.temp)}
            <sup>℃</sup>
          </dd>
        </div>
        <div>
          <dt>날씨</dt>
          <dd>{forecast.weather[0].description}</dd>
        </div>
      </dl>
      <img
        src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
        alt={forecast.weather[0].icon}
        className={styles.forecastIcon}
      />
    </li>
  )
}

export default Item

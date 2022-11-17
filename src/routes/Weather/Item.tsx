import { IListItem } from 'types/weather'

import styles from './weather.module.scss'

interface IProps {
  forecast: IListItem
}

const Item = ({ forecast }: IProps) => {
  return (
    <li className={styles.forecastItem}>
      <dl>
        <div>
          <dt>날짜</dt>
          <dd>
            <time dateTime={`${forecast.dt}`}>{forecast.dt_txt.substring(0, 13)}:00</time>
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
    </li>
  )
}

export default Item

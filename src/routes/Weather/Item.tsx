import { IListItem } from 'types/weather'

interface IProps {
  forecast: IListItem
}

const Item = ({ forecast }: IProps) => {
  return (
    <li>
      <dl>
        <div>
          <dt>날짜</dt>
          <dd>
            <time dateTime={`${forecast.dt}`}>{forecast.dt_txt}</time>
            <time dateTime={`${forecast.dt}`}>{forecast.dt_txt}</time>
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
          <dd>{forecast.weather[0].icon}</dd>
        </div>
      </dl>
    </li>
  )
}

export default Item

import { NavLink } from 'react-router-dom'
import { cx } from 'styles'

import styles from './gnb.module.scss'

const NAV_DATA = ['HOME', 'WEATHER']
const NAV_URI = ['/', '/weather']

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        {NAV_DATA.map((data, i) => {
          return (
            <li key={data}>
              <NavLink to={NAV_URI[i]} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                {data}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default GNB

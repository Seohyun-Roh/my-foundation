import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { cx } from 'styles'

import { themeState } from 'states/theme'

import styles from './gnb.module.scss'
import { Moon, Sun } from 'assets/svgs'

const NAV_DATA = ['HOME', 'WEATHER']
const NAV_URI = ['/', '/weather']

const GNB = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  const handleThemeClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

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
        <li>
          <button type='button' onClick={handleThemeClick} className={styles.themeBtn}>
            {theme === 'light' ? <Sun /> : <Moon />}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default GNB

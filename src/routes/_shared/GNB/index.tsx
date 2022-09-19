import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { cx } from 'styles'

import { useEffect, useI18n, useState } from 'hooks'
import i18n from 'utils/locale'
import { themeState } from 'states/theme'

import styles from './gnb.module.scss'
import { Moon, Sun } from 'assets/svgs'

const navData = ['home', 'weather']
const navURI = ['/', '/weather']

const storedLanguage = localStorage.getItem('language') || 'EN'

const GNB = () => {
  const t = useI18n()
  const [theme, setTheme] = useRecoilState(themeState)
  const [language, setLanguage] = useState(storedLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const handleThemeClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const handleLocaleClick = () => {
    setLanguage(language === 'EN' ? 'KO' : 'EN')
    i18n.changeLanguage(language.toLowerCase())
  }

  return (
    <nav className={styles.gnb}>
      <ul>
        {navData.map((data, i) => {
          return (
            <li key={data}>
              <NavLink to={navURI[i]} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                {`${t(`front:gnb.${data}`)}`}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div>
        <button type='button' onClick={handleThemeClick} className={styles.themeBtn}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
        <button type='button' onClick={handleLocaleClick}>
          {language}
        </button>
      </div>
    </nav>
  )
}

export default GNB

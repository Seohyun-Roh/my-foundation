import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { cx } from 'styles'

import { useI18n } from 'hooks'
import i18n from 'utils/locale'
import { themeState } from 'states/theme'
import { languageState } from 'states/language'

import styles from './gnb.module.scss'
import { Moon, Sun } from 'assets/svgs'

const navData = ['home', 'weather', 'directory']
const navURI = ['/', '/weather', '/directory']

const GNB = () => {
  const t = useI18n()
  const [theme, setTheme] = useRecoilState(themeState)
  const [language, setLanguage] = useRecoilState(languageState)

  const handleThemeClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const handleLocaleClick = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko'
    setLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
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
        <li>
          <button type='button' title={theme} onClick={handleThemeClick} className={styles.themeBtn}>
            {theme === 'light' ? <Sun data-icon='light' /> : <Moon data-icon='dark' />}
          </button>
        </li>
        <li>
          <button type='button' onClick={handleLocaleClick}>
            {language.toUpperCase() === 'KO' ? 'EN' : 'KO'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default GNB

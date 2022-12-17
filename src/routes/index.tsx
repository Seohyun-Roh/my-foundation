import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import i18n from 'utils/locale'
import { themeState } from 'states/theme'
import { languageState } from 'states/language'

import styles from './routes.module.scss'
import GNB from './_shared/GNB'
import Home from './Home'
import Weather from './Weather'
import Directory from './Directory'

const App = () => {
  const [theme] = useRecoilState(themeState)
  const [, setLanguage] = useRecoilState(languageState)

  useEffect(() => {
    i18n.changeLanguage()
    setLanguage(localStorage.getItem('i18nextLng')!)
  }, [setLanguage])

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme)
  }, [theme])

  return (
    <div className={styles.container}>
      <GNB />
      <main className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='weather' element={<Weather />} />
          <Route path='directory' element={<Directory />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

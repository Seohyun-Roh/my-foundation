import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import i18n from 'utils/locale'
import { themeState } from 'states/theme'

import styles from './routes.module.scss'
import HomePage from './Home'
import Weather from './Weather'
import GNB from './_shared/GNB'

const App = () => {
  const theme = useRecoilValue(themeState)

  useEffect(() => {
    i18n.changeLanguage()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme)
  }, [theme])

  return (
    <div className={styles.container}>
      <GNB />
      <main className={styles.app}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='weather' element={<Weather />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

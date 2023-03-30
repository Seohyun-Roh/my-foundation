import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import i18n from 'utils/locale'
import { themeState } from 'states/theme'
import { languageState } from 'states/language'

import GNB from './_shared/GNB'
import MouseFollowPageContainer from './_shared/MouseFollowPageContainer'
import Home from './Home'
import Weather from './Weather'
import Directory from './Directory'
import styles from './routes.module.scss'

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
    <MouseFollowPageContainer>
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
    </MouseFollowPageContainer>
  )
}

export default App

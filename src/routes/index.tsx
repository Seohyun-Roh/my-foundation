import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import i18n from 'utils/locale'
import { themeState } from 'states/theme'
import { languageState } from 'states/language'

import MouseFollowPageContainer from './_shared/MouseFollowPageContainer'
import GNB from './_shared/GNB'
import Home from './Home'
import Weather from './Weather'
import Directory from './Directory'
import Interactive from './Interactive'
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
            <Route path='interactive' element={<Interactive />} />
          </Routes>
        </main>
      </div>
    </MouseFollowPageContainer>
  )
}

export default App

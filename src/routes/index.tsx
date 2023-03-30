/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'
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

let x = 0
let y = 0
let targetX = 0
let targetY = 0
const speed = 0.05

const App = () => {
  const [theme] = useRecoilState(themeState)
  const [, setLanguage] = useRecoilState(languageState)
  const mouseRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>(0)

  useEffect(() => {
    i18n.changeLanguage()
    setLanguage(localStorage.getItem('i18nextLng')!)
  }, [setLanguage])

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme)
  }, [theme])

  const handleMouseMove: MouseEventHandler = (e) => {
    x = e.pageX
    y = e.pageY
  }

  const loop = useCallback(() => {
    targetX += (x - targetX) * speed
    targetY += (y - targetY) * speed

    if (mouseRef.current) {
      mouseRef.current.style.top = `${targetY}px`
      mouseRef.current.style.left = `${targetX}px`
    }

    requestRef.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(requestRef.current)
  }, [loop])

  const handleMouseDown = () => {
    if (mouseRef.current) {
      mouseRef.current.style.backgroundColor = '#ea3a4b'
    }
  }

  const handleMouseUp = () => {
    if (mouseRef.current) {
      mouseRef.current.style.backgroundColor = '#000000'
    }
  }

  const handleMouseEnter = () => {
    if (mouseRef.current) {
      mouseRef.current.style.display = 'block'
    }
  }

  const handleMouseLeave = () => {
    if (mouseRef.current) {
      mouseRef.current.style.display = 'none'
    }
  }

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.mouseMoveDiv} ref={mouseRef} />
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

import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import HomePage from './Home'
import Weather from './Weather'
import GNB from './_shared/GNB'

const App = () => {
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

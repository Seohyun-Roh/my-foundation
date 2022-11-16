import { useState, useEffect } from 'react'

import styles from './stopWatch.module.scss'

const StopWatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timer | undefined

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className={styles.stopWatchWrapper}>
      <time>
        {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} : {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
      </time>
      <div className={styles.buttonWrapper}>
        <button type='button' onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button type='button' onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button type='button' onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch

import { useRef } from 'react'

import styles from './interactive.module.scss'

const Interactive = () => {
  const pageRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const handleWheel = () => {
    if (pageRef.current && progressRef.current) {
      const scrollNum = window.scrollY
      const pageHeight = document.body.scrollHeight - window.innerHeight

      progressRef.current.style.width = `${((scrollNum / pageHeight) * 100).toFixed(0)}%`
    }
  }

  return (
    <div className={styles.pageContainer} onWheel={handleWheel} ref={pageRef}>
      <div className={styles.progressBar}>
        <div className={styles.bar} ref={progressRef} />
      </div>
    </div>
  )
}

export default Interactive

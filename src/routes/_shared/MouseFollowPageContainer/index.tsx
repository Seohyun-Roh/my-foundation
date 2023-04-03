/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { ReactNode } from 'react'

import { useMouseFollow } from 'hooks'

import styles from './mouseFollowPageContainer.module.scss'

const MouseFollowPageContainer = ({ children }: { children: ReactNode }) => {
  const { handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, mouseRef, circleRef } =
    useMouseFollow()

  return (
    <div
      className={styles.mouseFollowPageContainer}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cursorItem} ref={mouseRef}>
        <div className={styles.circle} ref={circleRef} />
      </div>
      {children}
    </div>
  )
}
export default MouseFollowPageContainer

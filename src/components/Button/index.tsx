import { MouseEventHandler, ReactNode } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'large' | 'small'
  primary?: boolean
  type: 'button' | 'submit'
  onClick?: MouseEventHandler
}

export const Button = ({ children, size, primary, type, onClick }: Props) => {
  return type === 'button' ? (
    <button type='button' onClick={onClick} className={cx(styles.button, styles[size], { [styles.primary]: primary })}>
      {children}
    </button>
  ) : (
    <button type='submit' className={cx(styles.button, styles[size], { [styles.primary]: primary })}>
      {children}
    </button>
  )
}

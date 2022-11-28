import { useState } from 'react'

import DropDown from 'components/DropDown'
import StopWatch from 'components/StopWatch'
import { Button } from 'components/Button'

import styles from './home.module.scss'

const DROPDOWN_CATEGORIES = ['전체', '음식점', '관광명소', '카페', '숙박', '문화시설', '기타']

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState('전체')

  return (
    <div className={styles.container}>
      <DropDown selectList={DROPDOWN_CATEGORIES} setCurrentSelect={setCurrentCategory} size='small'>
        {currentCategory}
      </DropDown>
      <StopWatch />
      <div className={styles.buttonsWrapper}>
        <Button size='small'>작은 버튼</Button>
        <Button size='small' primary>
          작은 주요 버튼
        </Button>
        <Button size='large'>큰 버튼</Button>
        <Button size='large' primary>
          큰 주요 버튼
        </Button>
      </div>
    </div>
  )
}

export default Home

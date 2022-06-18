import { useState } from 'react'

import DropDown from 'components/DropDown'
import styles from './home.module.scss'

const DROPDOWN_CATEGORIES = ['전체', '음식점', '관광명소', '카페', '숙박', '문화시설', '기타']

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState('전체')

  return (
    <div className={styles.container}>
      <DropDown selectList={DROPDOWN_CATEGORIES} setCurrentSelect={setCurrentCategory} size='small'>
        {currentCategory}
      </DropDown>
    </div>
  )
}

export default Home

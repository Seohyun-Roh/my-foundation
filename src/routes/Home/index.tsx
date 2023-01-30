import { useState } from 'react'

import { Button, Carousel, DropDown, StopWatch, Modal } from 'components'

import styles from './home.module.scss'

const DROPDOWN_CATEGORIES = ['전체', '음식점', '관광명소', '카페', '숙박', '문화시설', '기타']
const CAROUSEL_IMAGES = [
  'https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg',
  'https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg',
  'https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg',
]

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState('전체')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={styles.container}>
      <DropDown selectList={DROPDOWN_CATEGORIES} setCurrentSelect={setCurrentCategory} size='small'>
        {currentCategory}
      </DropDown>
      <StopWatch />
      <Carousel carouselList={CAROUSEL_IMAGES} />
      <div className={styles.buttonsWrapper}>
        <Button size='small' type='button'>
          작은 버튼
        </Button>
        <Button size='small' type='button' primary>
          작은 주요 버튼
        </Button>
        <Button size='large' type='button'>
          큰 버튼
        </Button>
        <Button size='large' type='button' primary>
          큰 주요 버튼
        </Button>
      </div>
      <Button size='large' type='button' onClick={handleModalOpen}>
        모달 열기
      </Button>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          모달 내용!
        </Modal>
      )}
    </div>
  )
}

export default Home

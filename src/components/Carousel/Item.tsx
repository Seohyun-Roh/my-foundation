import styles from './carousel.module.scss'

interface Props {
  image: string
}

const Item = ({ image }: Props) => {
  return (
    <li className={styles.carouselItem}>
      <img src={image} alt='carousel-img' />
    </li>
  )
}

export default Item

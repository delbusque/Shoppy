import styles from './Card.module.css'
import { AiFillStar } from 'react-icons/ai'

const Card = () => {
    return (
        <div className={styles["card-cont"]}>

            <img src="https://resources.mandmdirect.com/Images/_default/c/l/3/cl30226_1_thumb.jpg" alt="" className="img" />

            <div className={styles["cont"]}>
                <div className={styles["info-cont"]}>

                    <h3 className={styles["name"]}>Overshirt</h3>
                    <p className={styles["desc"]}>Closure London Ice Grey</p>
                    <div className={styles["stars-cont"]}>
                        <AiFillStar className={styles["star"]} /> <AiFillStar className={styles["star"]} />
                    </div>
                </div>

                <h2 className={styles["price"]}>$22.99</h2>

                <button className={styles["btn"]}>ADD TO CARD</button>

            </div>
        </div>
    )
}

export default Card;
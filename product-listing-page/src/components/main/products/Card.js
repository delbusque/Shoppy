import styles from './Card.module.css'
import { AiFillStar } from 'react-icons/ai'

const Card = ({ id, name, desc, img, price, rating }) => {
    return (
        <div className={styles["card-cont"]}>

            <img src={img} alt="image" className="img" />

            <div className={styles["cont"]}>
                <div className={styles["info-cont"]}>

                    <h3 className={styles["name"]}>{name}</h3>
                    <p className={styles["desc"]}>{desc}</p>
                    <div className={styles["stars-cont"]}>

                        {rating === 1 && <>
                            <AiFillStar className={styles["star"]} />
                        </>}
                        {rating === 2 && <>
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                        </>}
                        {rating === 3 && <>
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                        </>}
                        {rating === 4 && <>
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                        </>}
                        {rating === 5 && <>
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                            <AiFillStar className={styles["star"]} />
                        </>}

                    </div>
                </div>

                <h2 className={styles["price"]}>${price.toFixed(2)}</h2>

                <button className={styles["btn"]}>ADD TO CARD</button>

            </div>
        </div>
    )
}

export default Card;
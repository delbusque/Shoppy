import styles from './Headerer.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";

const Headerer = () => {
    return (
        <div className={styles['header']}>
            <section className={styles["logo-cont"]}>
                <section className={styles["search"]}>
                    Search...
                </section>

                <section className={styles["logo"]}>
                    SHOPPY
                </section>

                <section className={styles["user"]}>
                    <AiOutlineUser className={styles["user-icon"]} />
                    <BsBasket className={styles["user-icon"]} />
                </section>
            </section>


            <ul className={styles["cat-cont"]}>
                <li className={styles['cat']}>Jackets</li>
                <li className={styles['cat']}>Trousers</li>
                <li className={styles['cat']}>T-Shirts</li>
                <li className={styles['cat']}>Shorts</li>
                <li className={styles['cat']}>Shoes</li>
            </ul>

        </div>


    )
}

export default Headerer;
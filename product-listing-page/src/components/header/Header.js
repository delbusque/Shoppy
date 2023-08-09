import styles from './Header.module.css'
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import db from '../../db.js';

const Header = ({ setCategory, setProducts, categoryHandler, setShowFilter }) => {

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

                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Jackets</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Trousers</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>T-Shirts</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shorts</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shoes</li>

            </ul>

            <section className={styles["mob-cont"]}>

                <div className={styles["mob-logo-cont"]}>
                    <AiOutlineMenu className={styles["mob-menu"]} onClick={() => setShowFilter(show => !show)} />
                    <div className={styles["mob-logo"]}>
                        SHOPPY
                    </div>
                </div>
                <section className={styles["user"]}>
                    <AiOutlineUser className={styles["user-icon"]} />
                    <BsBasket className={styles["user-icon"]} />
                </section>

            </section>


        </div>


    )
}

export default Header;
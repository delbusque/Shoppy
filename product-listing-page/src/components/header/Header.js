import styles from './Header.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import db from '../../db.js';

import { Routes, Route, Link } from 'react-router-dom'

const Header = ({ setCategory, setProducts }) => {

    const categoryHandler = (e) => {
        const name = e.target.textContent;
        setCategory(db.categories.find(cat => cat.name === name));
        setProducts(db.products)
    }

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

            {/* <Routes>
                    <Route path='/' element={<li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Jackets</li>} />
                    <Route path='/' element={<li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Trousers</li>} />
                    <Route path='/' element={<li className={styles['cat']} onClick={(e) => categoryHandler(e)}>T-Shirts</li>} />
                    <Route path='/' element={<li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shorts</li>} />
                    <Route path='/' element={<li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shoes</li>} />
                </Routes> */}

        </div>
    )
}

export default Header;
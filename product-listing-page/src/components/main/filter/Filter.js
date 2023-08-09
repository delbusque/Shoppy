import Color from './Color.js';
import styles from './Filter.module.css'
import Price from './Price.js';

const Filter = ({ setByPrice, setByColor, categoryHandler }) => {
    return (
        <div className={styles['filter-cont']}>

            <ul className={styles["cat-cont"]}>

                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Jackets</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Trousers</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>T-Shirts</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shorts</li>
                <li className={styles['cat']} onClick={(e) => categoryHandler(e)}>Shoes</li>

            </ul>



            <Price setByPrice={setByPrice} />
            <Color setByColor={setByColor} className={styles['color']} />

        </div>
    )
}

export default Filter;
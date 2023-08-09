import Color from './Color.js';
import styles from './MobFilter.module.css'
import Price from './Price.js';

const MobFilter = ({ setByPrice, setByColor, categoryHandler }) => {
    return (
        <div className={styles['mobfilter-cont']}>
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

export default MobFilter;
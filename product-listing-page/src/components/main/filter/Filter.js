import Color from './Color.js';
import styles from './Filter.module.css'
import Price from './Price.js';

const Filter = () => {
    return (
        <div className={styles['filter-cont']}>

            <Price />
            <Color className={styles['color']} />

        </div>
    )
}

export default Filter;
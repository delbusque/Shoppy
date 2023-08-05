import Color from './Color.js';
import styles from './Filter.module.css'
import Price from './Price.js';

const Filter = ({ setByPrice }) => {
    return (
        <div className={styles['filter-cont']}>

            <Price setByPrice={setByPrice} />
            <Color className={styles['color']} />

        </div>
    )
}

export default Filter;
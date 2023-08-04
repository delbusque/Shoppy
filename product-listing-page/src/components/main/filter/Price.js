import styles from './Price.module.css'

const Price = () => {
    return (
        <div className={styles['price']}>
            <h4 className={styles['price-title']}>Price</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='all' name='price' /><span>{'All'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='25' name='price' /> <span>{'< 25'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='50' name='price' /> <span>{'25 - 50'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='100' name='price' /> <span>{'51 - 100'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='over-100' name='price' /> <span>{'> 100'}</span>
            </label>
        </div>
    )
}

export default Price;
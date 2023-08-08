import styles from './Price.module.css'

const Price = ({ setByPrice }) => {

    const priceHandler = (e) => {
        setByPrice(Number(e.target.value));
    }

    return (
        <div className={styles['price']}>
            <h4 className={styles['price-title']}>Price</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='25' name='price' onChange={priceHandler} />
                <span className={styles['checkmark']}></span>{'< 25'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='50' name='price' onChange={priceHandler} />
                <span className={styles['checkmark']}></span>{'25 - 49'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='100' name='price' onChange={priceHandler} />
                <span className={styles['checkmark']}></span>{'50 - 99'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='200' name='price' onChange={priceHandler} />
                <span className={styles['checkmark']}></span>{'100 >'}
            </label>
            <label className={styles['input-cont-all']}>
                <input type="radio" value='0' name='price' onChange={priceHandler} />
                <span className={styles['checkmark']}></span>{'All'}
            </label>
        </div>
    )
}

export default Price;
import styles from './Price.module.css'

const Price = ({ setByPrice }) => {

    const priceHandler = (e) => {
        setByPrice(Number(e.target.value));
    }

    return (
        <div className={styles['price']}>
            <h4 className={styles['price-title']}>Price</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='25' name='price' onChange={priceHandler} /> <span>{'< 25'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='50' name='price' onChange={priceHandler} /> <span>{'25 - 50'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='100' name='price' onChange={priceHandler} /> <span>{'51 - 100'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='200' name='price' onChange={priceHandler} /> <span>{'> 100'}</span>
            </label>
            <label className={styles['input-cont']}>
                <input type="radio" value='0' name='price' onChange={priceHandler} /><span>{'All'}</span>
            </label>
        </div>
    )
}

export default Price;
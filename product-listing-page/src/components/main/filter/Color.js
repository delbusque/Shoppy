import styles from './Color.module.css'

const Color = ({ setByColor }) => {

    const colorHandler = (e) => {
        setByColor(e.target.value);
    }

    return (
        <div className={styles['color']}>
            <h4 className={styles['color-title']}>Color</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='black' name='color' onChange={colorHandler} /> <span>{'Black'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='white' name='color' onChange={colorHandler} /> <span>{'White'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='red' name='color' onChange={colorHandler} /> <span>{'Red'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='brown' name='color' onChange={colorHandler} /> <span>{'Brown'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='blue' name='color' onChange={colorHandler} /> <span>{'Blue'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='green' name='color' onChange={colorHandler} /> <span>{'Green'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='yellow' name='color' onChange={colorHandler} /> <span>{'Yellow'}</span>
            </label>
            <label className={styles['input-cont']}>
                <input type="radio" value='all' name='color' onChange={colorHandler} /><span>{'All'}</span>
            </label>

        </div>


    )
}

export default Color;
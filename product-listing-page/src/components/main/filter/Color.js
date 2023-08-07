import styles from './Color.module.css'

const Color = ({ setByColor }) => {

    const colorHandler = (e) => {
        setByColor(e.target.value);
    }

    return (
        <div className={styles['color']}>
            <h4 className={styles['color-title']}>Color</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='black' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'Black'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='white' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'White'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='red' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'Red'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='brown' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'Brown'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='blue' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'Blue'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='green' name='color' onChange={colorHandler} /> <span className={styles['checkmark']}></span>{'Green'}
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='all' name='color' onChange={colorHandler} /><span className={styles['checkmark']}></span>{'All'}
            </label>

        </div>
    )
}

export default Color;
import styles from './Color.module.css'

const Color = () => {
    return (
        <div className={styles['color']}>
            <h4 className={styles['color-title']}>Color</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='black' name='color' /> <span>{'Black'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='white' name='color' /> <span>{'White'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='red' name='color' /> <span>{'Red'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='blue' name='color' /> <span>{'Blue'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='green' name='color' /> <span>{'Green'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='yellow' name='color' /> <span>{'Yellow'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='all' name='color' /><span>{'All'}</span>
            </label>
        </div>


    )
}

export default Color;
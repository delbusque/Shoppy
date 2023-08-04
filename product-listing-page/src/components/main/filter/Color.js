import styles from './Color.module.css'

const Color = () => {
    return (
        <div className={styles['color']}>
            <h4 className={styles['color-title']}>Color</h4>

            <label className={styles['input-cont']}>
                <input type="radio" value='25' name='price' /> <span>{'Black'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='50' name='price' /> <span>{'White'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='100' name='price' /> <span>{'Red'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='over-100' name='price' /> <span>{'Blue'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='over-100' name='price' /> <span>{'Green'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='over-100' name='price' /> <span>{'Yellow'}</span>
            </label>

            <label className={styles['input-cont']}>
                <input type="radio" value='all' name='price' /><span>{'All'}</span>
            </label>


        </div>


    )
}

export default Color;
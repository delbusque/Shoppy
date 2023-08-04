import styles from './Sort.module.css'


const Sort = () => {
    return (
        <div className={styles['sort-cont']}>
            <select name="sort" className={styles['select']}>
                <option value="a-z">Alphabetical a-z</option>
                <option value="z-a">Alphabetical z-a</option>
                <option value="asc">Price ascending</option>
                <option value="desc">Price descending</option>
            </select>
        </div>
    )
}

export default Sort;
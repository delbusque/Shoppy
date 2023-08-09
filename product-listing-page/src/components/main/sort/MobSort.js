import styles from './MobSort.module.css'

const MobSort = ({ sortHandler, showed, filtered }) => {

    return (
        <div className={styles['mobsort-cont']}>
            <div className={styles['counter']}>{showed} of {filtered} products</div>
            <select name="sort" className={styles['select']} onChange={(e) => sortHandler(e)}>
                <option disabled selected value="selected">Sort products by:</option>
                <option value="a-z" >Name (A-Z)</option>
                <option value="z-a">Name (Z-A)</option>
                <option value="asc" >Price (Low-High)</option>
                <option value="desc" >Price (High-Low)</option>
            </select>
        </div>
    )
}

export default MobSort;
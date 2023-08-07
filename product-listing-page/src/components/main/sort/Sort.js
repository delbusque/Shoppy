import styles from './Sort.module.css'

const Sort = ({ sortHandler, showed, filtered }) => {

    return (
        <div className={styles['sort-cont']}>
            <div className={styles['counter']}>{showed} of {filtered} products</div>
            <select name="sort" className={styles['select']} onChange={(e) => sortHandler(e)}>
                <option disabled value="selected" selected>Sort:</option>
                <option value="a-z" >A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="asc">Low-High</option>
                <option value="desc">High-Low</option>
            </select>
        </div>
    )
}

export default Sort;
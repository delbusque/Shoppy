import styles from './Category.module.css'

const Category = ({ category }) => {

    return (
        <>
            <div className={styles["category-cont"]}>
                <div className={styles["title"]}>{category.name}</div>
                <div className={styles["desc"]}>{category.desc}</div>
            </div>

        </>
    )
}

export default Category;
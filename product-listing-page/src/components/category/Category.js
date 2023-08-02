import styles from './Category.module.css'

const Category = () => {
    return (
        <>
            <div className={styles["category-cont"]}>
                <div className={styles["title"]}>T-Shirts</div>

                <div className={styles["desc"]}>Modernise your wardrobe with a graphic tee or go for a classic style with a plain designer top. A crew neck teams well with jeans, while a polo shirt looks great with chinos. </div>
            </div>

        </>
    )
}

export default Category;
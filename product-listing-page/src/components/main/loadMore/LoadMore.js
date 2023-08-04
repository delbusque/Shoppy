import styles from './LoadMore.module.css'

const LoadMore = ({ loadMoreHandler }) => {
    return (
        <div className={styles["load-more-cont"]}>
            <button className={styles["load-more-btn"]} onClick={loadMoreHandler}>LOAD MORE</button>
        </div>
    )
}

export default LoadMore;
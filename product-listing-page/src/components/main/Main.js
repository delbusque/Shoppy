import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';


const Main = () => {
    return (
        <div className={styles['main-cont']}>
            <Filter />
            <Tiles />
            <Sort />
        </div>
    )
}

export default Main;
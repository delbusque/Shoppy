import Filter from './Filter';
import styles from './Main.module.css'
import Sort from './Sort';
import Tiles from './Tiles';


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
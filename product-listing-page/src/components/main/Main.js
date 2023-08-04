import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ products }) => {
    return (
        <div className={styles['main-cont']}>
            <Filter />
            <Tiles products={products} />
            <Sort />
        </div>
    )
}

export default Main;
import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ category, products }) => {

    const chosenCategory = category.name.toLowerCase();

    const currentProducts = products.filter(prod => prod.category === chosenCategory)

    return (
        <div className={styles['main-cont']}>
            <Filter />
            <Tiles products={currentProducts} />
            <Sort />
        </div>
    )
}

export default Main;
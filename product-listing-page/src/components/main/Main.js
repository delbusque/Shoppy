import { useState } from 'react';

import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ category, products, flag, setIsLoadMore, setShowed, setFiltered }) => {

    const [byPrice, setByPrice] = useState(0);
    const [byColor, setByColor] = useState('all');

    const chosenCategory = category.name.toLowerCase();

    const currentProducts = products.filter(prod => prod.category === chosenCategory)

    return (
        <div className={styles['main-cont']}>
            <Filter setByPrice={setByPrice} setByColor={setByColor} />
            <Tiles products={currentProducts} flag={flag} byPrice={byPrice} byColor={byColor} setIsLoadMore={setIsLoadMore} setShowed={setShowed} setFiltered={setFiltered} />
            <Sort />
        </div>
    )
}

export default Main;
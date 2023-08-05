import { useState } from 'react';

import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ category, products, flag, setIsLoadMore }) => {

    const [byPrice, setByPrice] = useState(0);
    console.log(byPrice);

    const chosenCategory = category.name.toLowerCase();

    const currentProducts = products.filter(prod => prod.category === chosenCategory)

    return (
        <div className={styles['main-cont']}>
            <Filter setByPrice={setByPrice} />
            <Tiles products={currentProducts} flag={flag} byPrice={byPrice} setIsLoadMore={setIsLoadMore} />
            <Sort />
        </div>
    )
}

export default Main;
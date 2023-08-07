import { useState } from 'react';

import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ products, flag, setIsLoadMore, setShowed, setFiltered, setProducts, chosenCategory }) => {

    const [byPrice, setByPrice] = useState(0);
    const [byColor, setByColor] = useState('all');

    const currentProducts = products.filter(prod => prod.category === chosenCategory);

    const sortHandler = (e) => {
        if (e.target.value === 'a-z') {
            setProducts(currentProducts.sort((a, b) => a.name.localeCompare(b.name)))
        } else if (e.target.value === 'z-a') {
            setProducts(currentProducts.sort((a, b) => b.name.localeCompare(a.name)))
        } else if (e.target.value === 'asc') {
            setProducts(currentProducts.sort((a, b) => a.price - b.price))
        } else if (e.target.value === 'desc') {
            setProducts(currentProducts.sort((a, b) => b.price - a.price))
        }
    }


    return (
        <div className={styles['main-cont']}>
            <Filter setByPrice={setByPrice} setByColor={setByColor} />
            <Tiles products={currentProducts} flag={flag} byPrice={byPrice} byColor={byColor} setIsLoadMore={setIsLoadMore} setShowed={setShowed} setFiltered={setFiltered} />
            <Sort setProducts={setProducts} sortHandler={sortHandler} />
        </div>
    )
}

export default Main;
import { useState } from 'react';

import Filter from './filter/Filter';
import styles from './Main.module.css'
import Sort from './sort/Sort';
import Tiles from './products/Tiles';

const Main = ({ products, flag, setIsLoadMore, setShowed, setFiltered, setProducts, chosenCategory, showed, filtered }) => {

    const [byPrice, setByPrice] = useState(0);
    const [byColor, setByColor] = useState('all');
    const [sortFlag, setSortFlag] = useState(false)

    const currentProducts = products.filter(prod => prod.category === chosenCategory);

    const sortHandler = (e) => {

        setSortFlag(oldState => !oldState)

        if (e.target.value === 'a-z') {
            setProducts(currentProducts.sort((a, b) => a.name.localeCompare(b.name)))
        } else if (e.target.value === 'z-a') {
            setProducts(currentProducts.sort((a, b) => b.name.localeCompare(a.name)))
        } else if (e.target.value === 'asc') {

            setProducts(currentProducts.sort((a, b) => {
                if (a.discountPercentage && b.discountPercentage) {
                    return (a.price - (a.price * a.discountPercentage / 100)) - (b.price - (b.price * b.discountPercentage / 100))
                } else if (a.discountPercentage && !b.discountPercentage) {
                    return (a.price - (a.price * a.discountPercentage / 100)) - (b.price);
                } else if (!a.discountPercentage && b.discountPercentage) {
                    return (a.price) - (b.price - (b.price * b.discountPercentage / 100));
                }
                return a.price - b.price
            }))

        } else if (e.target.value === 'desc') {
            setProducts(currentProducts.sort((a, b) => {
                if (b.discountPercentage && a.discountPercentage) {
                    return (b.price - (b.price * b.discountPercentage / 100)) - (a.price - (a.price * a.discountPercentage / 100))
                } else if (!b.discountPercentage && a.discountPercentage) {
                    return (b.price - (a.price - (a.price * a.discountPercentage / 100)));
                } else if (b.discountPercentage && !a.discountPercentage) {
                    return ((b.price - (b.price * b.discountPercentage / 100)) - (a.price));
                }
                return b.price - a.price
            }))
        }
    }

    return (
        <div className={styles['main-cont']}>
            <Filter setByPrice={setByPrice} setByColor={setByColor} />
            <Tiles products={currentProducts} flag={flag} byPrice={byPrice} byColor={byColor} setIsLoadMore={setIsLoadMore} setShowed={setShowed} setFiltered={setFiltered} />
            <Sort setProducts={setProducts} sortHandler={sortHandler} showed={showed} filtered={filtered} sortFlag={sortFlag} />
        </div>
    )
}

export default Main;
import { useEffect } from 'react';
import Card from './Card';
import styles from './Tiles.module.css'

const Tiles = ({ products, flag, byPrice, setIsLoadMore, setShowed, setFiltered }) => {

    const filteredProducts = products.filter(p => {

        if (byPrice === 0) {
            return p
        }
        else if (byPrice === 25) {
            return p.price < 25
        }
        else if (byPrice === 50) {
            return p.price >= 25 && p.price <= 50
        }
        else if (byPrice === 100) {
            return p.price > 50 && p.price < 100
        }
        else {
            return p.price >= 100
        }
    })

    let onGrid = 0;

    // filteredProducts.length === 0 ? setIsLoadMore(false) : setIsLoadMore(true);

    const cardElement = filteredProducts.map(({ id, name, desc, img, price, rating }, i) => {
        if (i < flag) {
            onGrid++;
        }
        return i < flag && <Card key={id} img={img} name={name} price={price} desc={desc} rating={rating} />
    })

    useEffect(() => {
        setShowed(onGrid)
        setFiltered(filteredProducts.length)
    }, [filteredProducts, onGrid, setShowed, setFiltered])



    return (
        <>
            <div className={styles["tiles-cont"]}>
                {filteredProducts.length === 0 && <div className={styles["no-products"]}>No products with that criteria.</div>}

                {cardElement}

            </div>
        </>
    )
}

export default Tiles;
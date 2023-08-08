import { useEffect } from 'react';
import Card from './Card';
import styles from './Tiles.module.css'

const Tiles = ({ products, flag, byPrice, byColor, setIsLoadMore, setShowed, setFiltered }) => {

    const filteredProducts = products.filter(p => {

        let discount = p.discountPercentage;

        if (byPrice === 0) {
            if (byColor === 'all') {
                return p
            }
            else if (byColor === 'black') {
                return p.color === 'black'
            }
            else if (byColor === 'red') {
                return p.color === 'red'
            }
            else if (byColor === 'white') {
                return p.color === 'white'
            }
            else if (byColor === 'brown') {
                return p.color === 'brown'
            }
            else if (byColor === 'blue') {
                return p.color === 'blue'
            }
            else if (byColor === 'green') {
                return p.color === 'green'
            }
            else if (byColor === 'yellow') {
                return p.color === 'yellow'
            }
        }

        else if (byPrice === 25) {
            if (byColor === 'all') {
                return discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice;
            }
            else if (byColor === 'black') {
                return p.color === 'black' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }
            else if (byColor === 'red') {
                return p.color === 'red' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }
            else if (byColor === 'white') {
                return p.color === 'white' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }
            else if (byColor === 'brown') {
                return p.color === 'brown' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }
            else if (byColor === 'blue') {
                return p.color === 'blue' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }
            else if (byColor === 'green') {
                return p.color === 'green' && (discount ? p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price < byPrice);
            }

        }
        else if (byPrice === 50) {
            if (byColor === 'all') {
                return discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice);
            }
            else if (byColor === 'black') {
                return p.color === 'black' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }
            else if (byColor === 'red') {
                return p.color === 'red' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }
            else if (byColor === 'white') {
                return p.color === 'white' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }
            else if (byColor === 'brown') {
                return p.color === 'brown' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }
            else if (byColor === 'blue') {
                return p.color === 'blue' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }
            else if (byColor === 'green') {
                return p.color === 'green' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 25 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 25 && p.price < byPrice));
            }

        }
        else if (byPrice === 100) {
            if (byColor === 'all') {
                return discount ? p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice : p.price >= 50 && p.price < byPrice;
            }
            else if (byColor === 'black') {
                return p.color === 'black' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }
            else if (byColor === 'red') {
                return p.color === 'red' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }
            else if (byColor === 'white') {
                return p.color === 'white' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }
            else if (byColor === 'brown') {
                return p.color === 'brown' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }
            else if (byColor === 'blue') {
                return p.color === 'blue' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }
            else if (byColor === 'green') {
                return p.color === 'green' && (discount ? (p.price - (p.price * p.discountPercentage / 100) >= 50 && p.price - (p.price * p.discountPercentage / 100) < byPrice) : (p.price >= 50 && p.price < byPrice));
            }

        }
        else {
            if (byColor === 'all') {
                return discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100;
            }
            else if (byColor === 'black') {
                return p.color === 'black' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
            else if (byColor === 'red') {
                return p.color === 'red' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
            else if (byColor === 'white') {
                return p.color === 'white' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
            else if (byColor === 'brown') {
                return p.color === 'brown' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
            else if (byColor === 'blue') {
                return p.color === 'blue' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
            else if (byColor === 'green') {
                return p.color === 'green' && (discount ? p.price - (p.price * p.discountPercentage / 100) >= 100 : p.price >= 100);
            }
        }
    }
    )

    let onGrid = 0;

    const cardElement = filteredProducts.map(({ id, name, desc, img, price, rating, discountPercentage }, i) => {
        if (i < flag) {
            onGrid++;
        }
        return i < flag && <Card key={id} img={img} name={name} price={price} desc={desc} rating={rating} discount={discountPercentage} />
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
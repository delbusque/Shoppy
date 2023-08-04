import { useEffect, useState } from 'react';

import Card from './Card';
import styles from './Tiles.module.css'

const Tiles = ({ products }) => {

    const [flag, setFlag] = useState(20)

    return (
        <>
            <div className={styles["tiles-cont"]}>
                {products.map(({ id, name, desc, img, price, rating }, i) => {

                    return i < flag && <Card key={id} img={img} name={name} price={price} desc={desc} rating={rating} />
                })}


            </div>
        </>
    )
}

export default Tiles;
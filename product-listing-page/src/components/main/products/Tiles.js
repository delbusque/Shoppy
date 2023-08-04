import Card from './Card';
import styles from './Tiles.module.css'
import db from '../../../db.js';

const Tiles = () => {
    return (
        <div className={styles["flex-cont"]}>
            <div className={styles["tiles-cont"]}>

                {db.map(({ id, name, desc, img, price, rating }) => <Card key={id} img={img} name={name} price={price} desc={desc} rating={rating} />)}

            </div>
        </div>
    )
}

export default Tiles;
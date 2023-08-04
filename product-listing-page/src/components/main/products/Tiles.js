import Card from './Card';
import styles from './Tiles.module.css'

const Tiles = ({ products }) => {
    return (
        <div className={styles["tiles-cont"]}>
            {products.map(({ id, name, desc, img, price, rating }) => <Card key={id} img={img} name={name} price={price} desc={desc} rating={rating} />)}
        </div>
    )
}

export default Tiles;
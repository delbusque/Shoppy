import Card from './Card';
import styles from './Tiles.module.css'
import { AiFillStar } from 'react-icons/ai';

const Tiles = () => {
    return (
        <div className={styles["flex-cont"]}>
            <div className={styles["tiles-cont"]}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />





            </div>
        </div>
    )
}

export default Tiles;
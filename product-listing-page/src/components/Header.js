import './Header.css'
import { AiOutlineUser } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";

const Header = () => {
    return (
        <header className="header">

            <section className="logo">
                SHOPPY
            </section>

            <section className="nav">
                <ul className="cat-cont">

                    <li className='cat'>Jackets</li>
                    <li className='cat'>Trousers</li>
                    <li className='cat'>T-Shirts</li>
                    <li className='cat'>Shorts</li>
                    <li className='cat'>Shoes</li>
                </ul>
            </section>

            <section className="user-cont">
                <AiOutlineUser className="user" />
                <BsBasket className="user" />
            </section>
        </header>
    )
}

export default Header;
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <p>Copyright &copy; 2023 <span className={styles['footer-link']}> Privacy policy </span> SHOPPY <span className={styles['footer-link']}> T&C </span>All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;
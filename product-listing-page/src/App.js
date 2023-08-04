import styles from './App.module.css';

import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />

      <Main />

      <footer className={styles['footer']}>
        <p>Copyright &copy; 2023 <span className={styles['footer-link']}> Privacy policy </span> SHOPPY <span className={styles['footer-link']}> T&C </span>All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

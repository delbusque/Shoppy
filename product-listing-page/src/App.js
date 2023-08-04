import styles from './App.module.css';
import db from './db.js';
import { useState, useEffect } from 'react';

import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Main from "./components/main/Main";



function App() {

  const [category, setCategory] = useState(db.categories[0])

  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} />
      <Category category={category} />

      <Main products={db.products} category={category} />

      <button className={styles["btn-more"]}>LOAD MORE</button>

      <footer className={styles['footer']}>
        <p>Copyright &copy; 2023 <span className={styles['footer-link']}> Privacy policy </span> SHOPPY <span className={styles['footer-link']}> T&C </span>All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

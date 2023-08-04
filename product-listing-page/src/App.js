import styles from './App.module.css';
import db from './db.js';
import { useState, useEffect } from 'react';

import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Main from "./components/main/Main";
import Footer from './components/footer/Footer';
import LoadMore from './components/main/loadMore/LoadMore';



function App() {

  const [category, setCategory] = useState(db.categories[0])

  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} />
      <Category category={category} />

      <Main products={db.products} category={category} />

      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Header } from './components/Header';
import { FoodList } from './components/FoodList';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';

import "./style.css";

export const App = ()=>{
    return(
        <>
            <Header />
            <FoodList />
            <ProductList />
            <Footer />
      </>
    )
}
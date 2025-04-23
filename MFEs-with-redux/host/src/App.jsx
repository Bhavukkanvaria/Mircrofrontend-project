import React from 'react';
import { Header } from './components/Header';
import { FoodList } from './components/FoodList';
import {Footer} from './components/Footer'

import "./style.css";
import { StoreProvider } from './store';



export const App = ()=> {
    return(
        <StoreProvider>
            <Header/>
            <FoodList />
            <Footer/>
        </StoreProvider>
    )
}
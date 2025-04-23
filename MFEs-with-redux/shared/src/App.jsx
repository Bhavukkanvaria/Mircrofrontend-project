import React from 'react';
import CardDetails from './components/CardDetails';
import { StoreProvider } from 'Container/store';


export const App = ()=> {

    const cardDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza",
        "cuisine": "Italian",
        "rating": 4.5
    };


    return(
        <>
            <StoreProvider>
                <CardDetails data={cardDetails} />
            </StoreProvider>
        </>
    )
}
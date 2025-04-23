import React from 'react';
import CardDetails from './components/CardDetails';
import CardShort from './components/CardShort';


export const App = ()=>{

    const cardDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza",
        "cuisine": "Italian",
        "rating": 4.5
    };

    const cardShortDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza"
    };

    return(
        <>
            <div>
                <CardDetails data={cardDetails} />
            </div>
            <CardShort data = {cardShortDetails} />
        </>
    )
}
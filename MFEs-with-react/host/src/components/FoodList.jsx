import React, { useEffect, useState } from 'react';
const CardDeatils = React.lazy(()=> import('DetailCardInHost/CardDetais'))
const CardShort = React.lazy(()=> import('DetailCardInHost/CardShort'))

export const FoodList = ()=>{

    const [detailItems, setDetailItems] = useState([]);
    const [shortItems, setShortItems] = useState([]);
  

    const fetchCardDetails = async ()=>{
        const response = await fetch('https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating')
        const result = await response.json();
        if(result){
            setDetailItems(result.recipes)
        }
    }

    const fetchShortDetails = async ()=>{
        const response = await fetch('https://dummyjson.com/recipes?limit=5&skip=10&select=id,name,image')
        const result = await response.json();
        if(result){
            setShortItems(result.recipes)
        }
    }

    useEffect(()=>{
        fetchCardDetails();
        fetchShortDetails();
    },[])
  
   

    return (
        <div className="">
            {
                detailItems && detailItems.map((item)=>{
                    return <CardDeatils key={item.id} data={item} />
                })
            }
            {
                shortItems && shortItems.map((item)=>{
                    return <CardShort key={item.id} data={item} />
                })
            }
            
            
        </div>
    )
}
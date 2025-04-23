import React, { Suspense, useEffect, useState } from 'react';
const CardDeatils = React.lazy(()=> import('DetailCardInHost/CardDetais'))

export const FoodList = ()=>{

    const [detailItems, setDetailItems] = useState([]);
  

    const fetchCardDetails = async ()=>{
        const response = await fetch('https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating')
        const result = await response.json();
        if(result){
            setDetailItems(result.recipes)
        }
    }

    useEffect(()=>{
        fetchCardDetails();
    },[])
  

    return (
        <div className="detail-list-container">
            <Suspense fallback={<div>Loading cart details...</div>}>
                {
                    detailItems && detailItems.map((item)=>{
                        return <CardDeatils key={item.id} data={item} />
                    })
                }
            </Suspense>
            
            
        </div>
    )
}
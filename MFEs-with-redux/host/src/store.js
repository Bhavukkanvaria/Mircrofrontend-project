
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// cart state like this
// {   
//     id:1
//     name:"Classic Margherita Pizza"
//     image:"https://cdn.dummyjson.com/recipe-images/1.webp"
//     cuisine:"Italian"
//     rating:4.6
//     quantity:2
// }


const initialState = {
    cart:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCart:(state,action)=>{
            let data = action.payload;
            let existingItem = state.cart.find((item)=> item.id === data.id)
            if(existingItem){
                console.log('existingItem')
                existingItem.quantity+=1
            }else{
                console.log('HERE',{ ...data, quantity: 1 })
                state.cart.push({ ...data, quantity: 1 });
            }
        }
    }
})

const cartReducer = cartSlice.reducer;

export const {setCart} = cartSlice.actions;

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})


export const StoreProvider = ({children})=>{
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export const useStore = ()=>{
    const cart = useSelector((state)=> state.cart.cart);
    const dispatch = useDispatch();
    return{
        cart,
        dispatch
    }
}
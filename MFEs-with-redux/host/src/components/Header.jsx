import React, { useState } from 'react';
import { useStore } from '../store';

export const Header = ()=>{

    const {cart} = useStore();

    const [showCart, setShowCart] = useState(false)

    const clickHandler = ()=>{
        setShowCart(!showCart)
    }

    return (
        <div className='header-wrapper'>
            <div className="header">
                Microfrontend Header Application
            </div>
            <span className="cart" onClick={clickHandler}>🛒 ({cart.length})</span>
            {
                showCart && cart.length > 0 &&
                <ul className='cart-items'>
                    {
                        cart.map((item)=>{
                            return(
                                <li key={item.id} className=''>{item.name} ({item.quantity})</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}
import React, { useState } from 'react';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {BsTrash3} from "react-icons/bs";

const Cart = () => {
    const { cart ,Setcart} = useContext(NavigationContext);

    // Define a state variable to manage the cart
    const [cartItems, setCartItems] = useState(cart);

    // Function to decrease the quantity of an item
    const decreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
        });
        setCartItems(updatedCart);
    };

    // Function to increase the quantity of an item
    const increaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
        if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
        });
        setCartItems(updatedCart);
    };

    const removeItem =(id)=>{
        const updated = cart.filter((item)=>item.id!==id)
        setCartItems([...updated])
        Setcart([...updated])
    }

    let cost=0;
    cartItems.forEach(item => {
        cost+=item.quantity*item.likes
    });

    let message="";
    if(cost){
        message=<p>Total Cost-<strong>${cost}</strong></p>
    }
    else{
        message=<p>Looks like cart is empty !!!!</p>
    }

    const render = cartItems.map((item) => {
        return (
        <div key={item.id} className="box">
            <div>
                <img src={item.urls.small} alt="" />
                <p>Price - ${item.likes}</p>
            </div>
            <div className='num'>
                <AiOutlineMinus size="20" onClick={() => decreaseQuantity(item.id)} className='icon'/>
                <p>{item.quantity}</p>
                <AiOutlinePlus size="20" onClick={() => increaseQuantity(item.id)} 
                className='icon'/>
            </div>
            <div className='price'>Price<strong>${item.quantity*item.likes}</strong></div>
            <div><BsTrash3 size="20" onClick={()=>removeItem(item.id)} 
            color="red"/></div>
        </div>
        );
    });

    return <div className="cart">
        {render}
        {message}
        </div>;
};

export default Cart;

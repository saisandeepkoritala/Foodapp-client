import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext} from "react";
import NavigationContext from "../context/Navigation";
import { Link } from 'react-router-dom';
import {ToastContainer} from "react-toastify";

const Details = () => {

    const id=useParams();
    const {data,addCart}=useContext(NavigationContext);
    const dish=data.find((item)=>item.id===id.id);

    const otheritems=data.slice(10,25);
    

    const rendereditem=otheritems.map((item)=>{
        return <Link key={item.id} to={`/details/${item.id}`}>
            <img src={item.urls.small} alt=""></img>
        </Link>
    })

    const rendered=<div key={dish.id} className='dish'>
    <img src={dish.urls.small} alt=""/>
    <p>{dish.alt_description}</p>
    <p>Price - <strong>${dish.likes}</strong></p>
    <button onClick={()=>addCart(dish)}>Add to Cart</button>
    <ToastContainer/>
    </div>
return (
    <div className='details'>
        {rendered}
        <div className='other'>
            <p>Users also prefer to order these along with the dish</p>
            <div>
                {rendereditem}
            </div>
        </div>
    </div>
)
}

export default Details;
import React from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useContext} from "react";
import NavigationContext from "../context/Navigation";
import {useState} from "react";

const Details = () => {
    const[num,Setnum]=useState(0);
    console.log(typeof num)
    const id=useParams();
    const {data}=useContext(NavigationContext);
    const dish=data.find((item)=>item.id===id.id)
    const price=dish.likes * num;
    const rendered=<div key={dish.id} className='dish'>
    <img src={dish.urls.small} alt=""/>
    <p>{dish.alt_description}</p>
    <p>Price - ${dish.likes}</p>
    </div>
return (
    <div className='details'>
        {rendered}
        <div className='more-details'>
            <div className='num'>
                <AiOutlineMinus size="60" className='icon' 
                onClick={()=>{
                    if(num>0){
                    Setnum(Number(num-1))
                    }
                    else{
                        Setnum(0)
                    }
                    }}/>
                <p>{num}</p>
                <AiOutlinePlus size="60" className='icon'
                onClick={()=>Setnum(Number(num+1))}/>
            </div>
            <div>
                <h2>Select the Quantity</h2>
            </div>
            <div>
                <h2>Price - {price}</h2>
            </div>
        </div>
    </div>
)
}

export default Details;
import React, { useEffect, useState } from 'react'
import Unsplash from '../Unsplash/pics'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

const Categories = () => {

    const {data,Setdata}=useContext(NavigationContext);
    const[pic,Setpic]=useState([]);
    
    useEffect(()=>{
        Unsplash("pizza").then(
            (res)=>{Setpic(res)
        const dup=data.find((item)=>item.id===res[0].id)  
        if(!dup){
            Setdata([...data,...res])
        }
        }
        ).catch((err)=>console.log(err))
    },[])

    const getitems=(term)=>{
        Unsplash(term)
        .then((res)=>{Setpic(res)
    const dup = data.find((item)=>item.id===res[0].id)   
    if(!dup){ 
        Setdata([...res,...data])
    }
    })
        .catch((err)=>console.log("error",err))
    }

    const render=pic.map((item,i)=>{
        if(i<10){
        return <Link key={item.id} to={`/details/${item.id}`} className='items'>
            <img src={item.urls.small} alt=""></img>
            <p>{item.alt_description}</p>
            <p>Price - <strong>${item.likes}</strong></p>
        </Link>
        }
    })
return (
    <div className='categ'>
        <nav className='nav'>
            <li onClick={()=>getitems("Burger and fries")}>American</li>
            <li onClick={()=>getitems("chinese Food")}>Chinese</li>
            <li onClick={()=>getitems("Biryani")}>Indian </li>
            <li onClick={()=>getitems("italian Food")}>Italian</li>
            <li onClick={()=>getitems("mexican Food")}>Mexican </li>
            <li onClick={()=>getitems("soft drinks")}>Soft Drinks</li>
            <li onClick={()=>getitems("beers")}>Beers</li>
        </nav>
        <div className='food'>
            {render}
        </div>
    </div>
)
}

export default Categories;

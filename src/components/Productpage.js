import React, { useEffect, useState } from 'react';
import Unsplash from '../Unsplash/pics';

const Productpage = () => {
  const[results,Setresults]=useState([]);

  useEffect(()=>{
    const getItems=(term)=>{
      Unsplash(term).then((res)=>Setresults(res)).catch((err)=>console.log("error"))
    }

    getItems("Vegetables")
  },[])

  const render=results.map((item)=>{
    return <div key={item.id} to={`/details/${item.id}`} className='items'>
    <img src={item.urls.small} alt="" width="200px" height="200px"></img>
    <p>{item.alt_description}</p>
    <p>Price - <strong>${item.likes}</strong></p>
</div>
  })

  return (
    <div className='page'>
      {render}
    </div>
  )
}

export default Productpage;

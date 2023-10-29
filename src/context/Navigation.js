import {createContext, useState,useEffect} from "react";
import Unsplash from "../Unsplash/pics";

const NavigationContext = createContext();

function Provider({children}){
    const[data,Setdata]=useState([]);

    useEffect(()=>{
        Unsplash("Food")
        .then((res)=>Setdata(res))
        .catch((err)=>console.log("error",err))
    },[])

    const valueToShare={
        data:data
    }
    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    )
}

export {Provider};
export default NavigationContext;
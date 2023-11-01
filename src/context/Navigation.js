import {createContext, useState,useEffect} from "react";
import Unsplash from "../Unsplash/pics";

const NavigationContext = createContext();

function Provider({children}){
    const[data,Setdata]=useState([]);
    const[user,Setuser]=useState(false);
    const[signuser,Setsignuser]=useState(false);
    const[cart,Setcart]=useState([]);

    useEffect(()=>{
        Unsplash("Food")
        .then((res)=>Setdata(res))
        .catch((err)=>console.log("error",err))
    },[])

    const addCart=(item)=>{

        const duplicate=cart.find((dish)=>dish.id===item.id)
        if(!duplicate){
        Setcart([...cart,{...item,quantity:1}])
        }
        else{
            console.log("duplicate")
        }
    }


    const valueToShare={
        data,Setdata,user,Setuser,Setsignuser,signuser,addCart,cart,Setcart

    }
    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    )
}

export {Provider};
export default NavigationContext;
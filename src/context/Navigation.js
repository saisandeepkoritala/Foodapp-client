import {createContext, useState,useEffect} from "react";
import Unsplash from "../Unsplash/pics";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const notify=()=>{
        toast.success("Added to cart !!",{
            position:toast.POSITION.TOP_RIGHT
        })
    }

    const notifyFail=()=>{
        toast.error("Item already in cart !!",{
            position:toast.POSITION.TOP_RIGHT
        })
    }
    
    const addCart=(item)=>{
        const duplicate=cart.find((dish)=>dish.id===item.id)
        if(!duplicate){
        notify()
        Setcart([...cart,{...item,quantity:1}])
        }
        else{
            notifyFail()
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
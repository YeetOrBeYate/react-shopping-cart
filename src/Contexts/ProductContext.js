import React, {createContext, useState} from 'react';
import data from "../data"

export const PContext = createContext();


//we wrap this component around everything that will use it
export const ProductContext = (props) =>{
    const [products] = useState(data);

	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart((cart)=>[...cart, item])
    };

    const RemoveItem = id =>{
        setCart((cart)=>{ return cart.filter((car, index)=>{
            if(index !==id){
                console.log("length",cart.length)
                return car;
                
            }
        })})
    }

    return(
        <PContext.Provider value ={{products, cart, RemoveItem, addItem}}>
            {props.children}
        </PContext.Provider>
    );
}


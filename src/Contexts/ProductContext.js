import React, {createContext, useState} from 'react';
import data from "../data"
import { arrayExpression } from '@babel/types';
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
        setCart((cart)=>{ return cart.map((car, index)=>{
            if(index !==id){
                console.log(cart)
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


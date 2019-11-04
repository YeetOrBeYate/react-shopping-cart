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
    
    return(
        <PContext.Provider value ={{products, cart, setCart, addItem}}>
            {props.children}
        </PContext.Provider>
    );
}


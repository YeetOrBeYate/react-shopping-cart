import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context component and context itself

import {YeetContext} from "./Contexts/YeetContext";
import {CartContext} from "./Contexts/CartContext";

function App() {

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
	return (
		<div className="App">
			<CartContext.Provider value = {{cart, RemoveItem}}>
			<YeetContext.Provider value={{products, addItem}}>
				<Navigation />
				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>
				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</YeetContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;

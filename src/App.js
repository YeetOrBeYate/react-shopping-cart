import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context component and context itself
import {ProductContext} from "./Contexts/ProductContext";
import {PContext} from "./Contexts/ProductContext";

function App() {
	

	return (
		<div className="App">
			<ProductContext>

			
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
			</ProductContext>
		</div>
	);
}

export default App;

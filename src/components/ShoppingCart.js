import React from 'react';
import {PContext} from "../Contexts/ProductContext"
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart} = React.useContext(PContext)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map((item, index) => (
				<Item index={index} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;

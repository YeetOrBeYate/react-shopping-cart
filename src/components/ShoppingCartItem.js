import React from 'react';

import { CartContext } from '../Contexts/CartContext';
const Item = props => {
	const {RemoveItem} = React.useContext(CartContext)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={()=>RemoveItem(props.index)}>Remove from cart</button>
				{console.log(props.index)}
			</div>
		</div>
	);
};

export default Item;

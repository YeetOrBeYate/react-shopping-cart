import React from 'react';
import {PContext} from "../Contexts/ProductContext"

const Product = props => {
	const {addItem} = React.useContext(PContext)
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;

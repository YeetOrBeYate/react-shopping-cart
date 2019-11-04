import React from 'react';

// Components
import Product from './Product';

//context
import {PContext} from "../Contexts/ProductContext"

const Products = props => {
	const {products, addItem} = React.useContext(PContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;

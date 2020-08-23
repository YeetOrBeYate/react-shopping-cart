import React from 'react';

// Components
import Product from './Product';

//context
import {YeetContext} from "../Contexts/YeetContext"

const Products = props => {
	const {products} = React.useContext(YeetContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
